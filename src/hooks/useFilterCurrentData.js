"use client";

import { useCity } from "@/context/WeatherProvider";
import useCurrentWeather from "./useCurrentWeather";

export default function useFilterCurrentData() {
  const { city } = useCity();
  const { data, isLoading, error } = useCurrentWeather(city);
  console.log(data);

  let currentTemperature = data?.main?.temp;
  let maxTemperature = data?.main?.temp_max;
  let minTemperature = data?.main?.temp_min;
  const weatherIcon = data?.weather[0]?.icon;
  const zeroKelvin = 273.15;

  maxTemperature = Math.round(maxTemperature - zeroKelvin);
  minTemperature = Math.round(minTemperature - zeroKelvin);
  currentTemperature = Math.round(currentTemperature - zeroKelvin);

  return {
    isLoading,
    error,
    currentTemperature,
    maxTemperature,
    minTemperature,
    weatherIcon,
  };
}
