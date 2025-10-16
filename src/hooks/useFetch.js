import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(new Error("No URL provided"));
      setIsLoading(false);
      return;
    }

    setData(null);
    setError(null);
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
