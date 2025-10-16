"use client";

import { useCity } from "@/context/WeatherProvider";
import useRequestWeather from "./useRequestWeather";

export default function useFilterWeatherData() {
  const { city } = useCity();
  const { data, isLoading, error } = useRequestWeather(city);
  console.log(data);

  let currentIcon = data?.currentConditions?.icon;
  let currentTemperature = data?.currentConditions?.temp;
  let maxTemperature = data?.days[0]?.tempmax;
  let minTemperature = data?.days[0]?.tempmin;
  let forecastDays = data?.days;

  currentTemperature = Math.round(currentTemperature);
  maxTemperature = Math.round(maxTemperature);
  minTemperature = Math.round(minTemperature);

  return {
    currentIcon,
    forecastDays,
    isLoading,
    error,
    currentTemperature,
    maxTemperature,
    minTemperature,
    city,
  };
}
