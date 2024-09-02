import {
  getLocalTime,
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
    ? getLocalTime(currentTime, timezone)
    : timeTo12HourFormat(getLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? getLocalTime(currentTime, timezone).split(":")[0] >= 12
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
    new Date(weatherData.current.time).getUTCDay()
  ];
};

export const getWeatherDescription = (code, isDay) => {
  const codeAttributes = {
    0: { description: "Clear sky", iconName: isDay ? "01d" : "01n" },
    1: { description: "Mainly clear", iconName: isDay ? "02n" : "02d" },
    2: { description: "Partly cloudy", iconName: isDay ? "03n" : "03d" },
    3: { description: "Overcast", iconName: isDay ? "04n" : "04d" },
    45: { description: "Fog", iconName: isDay ? "50n" : "50d" },
    48: { description: "Depositing rime fog", iconName: isDay ? "50n" : "50d" },
    51: { description: "Light drizzle", iconName: isDay ? "09d" : "09d" },
    53: { description: "Moderate drizzle", iconName: isDay ? "09d" : "09d" },
    55: { description: "Dense drizzle", iconName: isDay ? "09n" : "09d" },
    56: { description: "Light freezing drizzle", iconName: isDay ? "09n" : "09d" },
    57: { description: "Dense freezing drizzle", iconName: isDay ? "09n" : "09nd" },
    61: { description: "Slight Rain", iconName: isDay ? "10n" : "10d" },
    63: { description: "Moderate Rain", iconName: isDay ? "10n" : "10d" },
    65: { description: "Heavy Rain", iconName: isDay ? "10n" : "10d" },
    66: { description: "Light freezing rain", iconName: isDay ? "10n" : "10d" },
    67: { description: "Heavy freezing rain", iconName: isDay ? "10n" : "10d" },
    71: { description: "Slight snow fall", iconName: isDay ? "13n" : "13d" },
    73: { description: "Moderate snow fall", iconName: isDay ? "13n" : "13d" },
    75: { description: "Heavy snow fall", iconName: isDay ? "13n" : "13d" },
    77: { description: "Snow grains", iconName: isDay ? "13n" : "13d" },
    80: { description: "Slight rain showers", iconName: isDay ? "09n" : "09d" },
    81: { description: "Moderate Rain showers", iconName: isDay ? "09n" : "09d" },
    82: { description: "Violent Rain showers", iconName: isDay ? "09n" : "09d" },
    85: { description: "Slight snow showers", iconName: isDay ? "13n" : "13d" },
    86: { description: "Heavy snow showers", iconName: isDay ? "13n" : "13d" },
    95: { description: "Slight/Moderate thunderstorm", iconName: isDay ? "11n" : "11d" },
    96: { description: "Thunderstorm with slight hail", iconName: isDay ? "11n" : "11d" },
    99: { description: "Thunderstorm with heavy hail", iconName: isDay ? "11n" : "11d" },
  };

  return codeAttributes[code] || { description: "No info :(", iconName: "question-mark" };
};