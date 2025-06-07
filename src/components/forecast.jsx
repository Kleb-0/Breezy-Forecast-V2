import ForecastDay from "./forecastDay";

export default function Forecast() {
  return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-fit mx-auto mt-8 sm:mb-0 mb-8 px-2.5">
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
      </div>
  );
}
