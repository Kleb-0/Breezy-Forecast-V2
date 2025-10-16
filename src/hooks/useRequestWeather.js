"use client";

import useFetch from "@/hooks/useFetch";

export default function useRequestWeather(city) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = city
    ? `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        city
      )}}?unitGroup=metric&key=${API_KEY}`
    : null;
  const { data, isLoading, error } = useFetch(url);

  return { data, isLoading, error };
}
