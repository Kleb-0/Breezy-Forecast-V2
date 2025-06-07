import Image from "next/image";

export default function ForecastDay() {
  return (
    <div className="flex flex-col items-center sm:gap-4 bg-orange-50 rounded-lg sm:px-16 px-8 h-fit w-fit shadow-md py-2">
      <h3>Tuesday</h3>
      <Image
        src="/sun-between-clouds.png"
        width={100}
        height={100}
        alt="weather-icon"
      ></Image>
      <p>6° / 15° </p>
    </div>
  );
}
