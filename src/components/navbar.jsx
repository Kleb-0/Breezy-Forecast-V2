import Image from "next/image";
import SearchField from "./searchfield";

export default function NavBar() {
  return (
    <div className="h-18 bg-neutral-950 text-neutral-100 flex items-center justify-center sm:justify-between sm:text-base text-sm pl-4 pr-4 w-screen">
      <div className="flex-shrink-0 sm:block hidden">
        <Image
          src="/logo-breezy-forecast.png"
          alt="logo breezy forecast"
          width={200}
          height={200}
        />
      </div>
      <SearchField />
    </div>
  );
}
