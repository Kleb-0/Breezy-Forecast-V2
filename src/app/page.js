"use client";

import CurrentWeather from "@/components/currentWeather";
import ErrorScreen from "@/components/ErrorScreen";
import Forecast from "@/components/forecast";
import LoadingScreen from "@/components/LoadingScreen";
import useFilterWeatherData from "@/hooks/useFilterWeatherData";

export default function Home() {
  const weatherData = useFilterWeatherData();

  if (weatherData.isLoading) {
    return <LoadingScreen />;
  }

  if (weatherData.error) {
    return <ErrorScreen />
  }

  return (
    <div className="pb-8">
      <CurrentWeather weatherData={weatherData} />
      <Forecast weatherData={weatherData} />
      <footer className="w-full text-center mt-8">
        <p>
          Made by <strong>Calebe Hillesheim Lamb</strong>
        </p>
      </footer>
    </div>
  );
}
