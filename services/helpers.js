"use client";
import {
  localTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,

} from "./converters";


export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
  unitSystem == "metric"
    ? localTime(currentTime, timezone)
    : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};

export const getWeatherDescription = (code, isDay) => {
  const weatherCode={
    0: { description: "Clear sky", iconName: isDay ? "01d" : "01n" },
    1: { description: "Mainly clear", iconName: isDay ? "02d" : "02n" },
    2: { description: "Partly cloudy", iconName: isDay ? "03d" : "03n" },
    3: { description: "Overcast", iconName: isDay ? "04d" : "04n" },
    45: { description: "Fog", iconName: isDay ? "50d" : "50n" },
    48: { description: "Depositing rime fog", iconName: isDay ? "50d" : "50n" },
    51: { description: "Light Drizzle", iconName: isDay ? "09d" : "09n" },
    53: { description: "Moderate Drizzle", iconName: isDay ? "09d" : "09n" },
    55: { description: "Dense Drizzle", iconName: isDay ? "09d" : "09n" },
    56: { description: "Light Freezing Drizzle", iconName: isDay ? "09d" : "09n" },
    57: { description: "Dense Freezing Drizzle", iconName: isDay ? "09d" : "09n" },
    61: { description: "Slight Rain", iconName: isDay ? "10d" : "10n" },
    63: { description: "Moderate Rain", iconName: isDay ? "10d" : "10n" },
    65: { description: "HeavyRain", iconName: isDay ? "10d" : "10n" },
    66: { description: "Light Freezing Rain", iconName: isDay ? "13d" : "13n" },
    67: { description: "Heavy Freezing Rain", iconName: isDay ? "13d" : "13n" },
    71: { description: "Slight Snow", iconName: isDay ? "13d" : "13n" },
    73: { description: "Moderate Snow", iconName: isDay ? "13d" : "13n" },
    75: { description: "Heavy Snow", iconName: isDay ? "13d" : "13n" },
    77: { description: "Snow Grains", iconName: isDay ? "13d" : "13n" },
    80: { description: "Slight Rain showers", iconName: isDay ? "09d" : "09n" },
    81: { description: "Moderate Rain showers", iconName: isDay ? "09d" : "09n" },  
    82: { description: "Violent Rain showers", iconName: isDay ? "09d" : "09n" },
    96: { description: "Slight Snow showers", iconName: isDay ? "13d" : "13n" },
    99: { description: "Heavy Snow showers", iconName: isDay ? "13d" : "13n" },
  };
  return weatherCode[code] || { description: "Unknown", iconName: "unknown" };
}