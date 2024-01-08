import { useState, useEffect } from "react";

import ApiDataRenderer from "../ApiDataRenderer.jsx";

import useFetch from "../../hooks/useFetch.js";

export default function CustomHook() {
  const fetchData = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <ApiDataRenderer data={fetchData} />
      <pre style={{ background: "#eee", padding: "10px" }}>
        <code>{sourceCode}</code>
      </pre>
    </div>
  );
}

const sourceCode = `// ProjectFolder/src/hooks/useFetch.js
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

// CustomHook.jsx
import useFetch from "../../hooks/useFetch.js";

export default function CustomHook() {
  const fetchData = useFetch("https://jsonplaceholder.typicode.com/users");
}`;
