"use client";

import CurrentWeather from "@/components/currentWeather";
import ErrorScreen from "@/components/ErrorScreen";
import Forecast from "@/components/forecast";
import LoadingScreen from "@/components/LoadingScreen";
import useFilterCurrentData from "@/hooks/useFilterCurrentData";

export default function Home() {
  const currentWeatherData = useFilterCurrentData();

  if (currentWeatherData.isLoading) {
    return <LoadingScreen />;
  }

  if (currentWeatherData.error) {
    return <ErrorScreen />;
  }

  return (
    <div>
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <Forecast />
    </div>
  );
}
