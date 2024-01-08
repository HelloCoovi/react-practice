import { useState, useEffect } from "react";

export default function useFetch(URL) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setUserData(data);
    };

    fetchData();
  }, []);

  return userData
}