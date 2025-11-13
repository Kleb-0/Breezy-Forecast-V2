"use client";

import CurrentWeather from "@/components/currentWeather";
import ErrorScreen from "@/components/fallbacks/ErrorScreen";
import Forecast from "@/components/forecast";
import LoadingScreen from "@/components/fallbacks/LoadingScreen";
import Welcome from "@/components/welcome";
import { useCity } from "@/context/WeatherProvider";
import useFilterWeatherData from "@/hooks/useFilterWeatherData";

export default function Home() {
  const { city } = useCity();
  const weatherData = useFilterWeatherData();

  if (weatherData.isLoading) {
    return <LoadingScreen />;
  }

  if (weatherData.error && city.length > 0) {
    return <ErrorScreen />;
  }

  if (city.length == 0) {
    return <Welcome />;
  }

  return (
    <div className="pb-8">
      <CurrentWeather weatherData={weatherData} />
      <Forecast weatherData={weatherData} />
      <footer className="w-full text-center mt-8">
        <p>
          Developed by <strong>Calebe Hillesheim Lamb</strong>
        </p>
      </footer>
    </div>
  );
}
