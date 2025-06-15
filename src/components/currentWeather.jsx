import Image from "next/image";

export default function CurrentWeather({ currentWeatherData }) {
  const { currentTemperature, maxTemperature, minTemperature, weatherIcon } =
    currentWeatherData;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center sm:pr-9">
        <h1 className="font-bold text-5xl">{currentTemperature}°C</h1>
        <p>High: {maxTemperature}°C</p>
        <p>Low: {minTemperature}°C</p>
      </div>
      <div className="flex items-center justify-center sm:pl-9">
        <Image
          src="/sun-between-clouds.png"
          alt="weather icon"
          width={130}
          height={130}
        />
      </div>
    </div>
  );
}
