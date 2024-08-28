export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,visibility&daily=sunrise,sunset&timezone=auto'  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
