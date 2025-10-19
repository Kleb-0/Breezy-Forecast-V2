"use client";

import { useContext, createContext, useState } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [city, setCity] = useState("");

  return (
    <WeatherContext.Provider value={{ city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useCity() {
  return useContext(WeatherContext);
}
