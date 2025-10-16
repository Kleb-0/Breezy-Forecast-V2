import { useCity } from "@/context/WeatherProvider";

export default function ErrorScreen() {
  const { city } = useCity();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-[var(--foreground)] rounded-xl shadow-lg p-8 animate-fade-in w-fit">
        <h1 className="text-2xl font-bold text-white mb-2">No city named "{city}" Found</h1>
        <p className="text-white text-lg opacity-80">Please check the spelling and try again.</p>
      </div>
    </div>
  );
}
