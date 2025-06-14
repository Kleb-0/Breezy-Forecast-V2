"use client";

import useFetch from "@/hooks/useFetch";

export default function useCurrentWeather(city) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    : null;
  const { data, isLoading, error } = useFetch(url);

  return { data, isLoading, error };
}
