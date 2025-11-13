import Image from "next/image";

export default function ForecastDay({ dayData }) {
  return (
    <div className="flex flex-col items-center sm:gap-4 bg-orange-50 rounded-lg sm:px-16 px-8 h-fit w-fit shadow-md py-2">
      <h3>{getWeekday(dayData.datetime)}</h3>
      <Image
        src="/sun-between-clouds.png"
        width={100}
        height={100}
        alt="weather-icon"
      ></Image>
      <p>
        {Math.round(dayData.tempmax)} / {Math.round(dayData.tempmin)}
      </p>
    </div>
  );
}

function getWeekday(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-us", { weekday: "long" });
}
