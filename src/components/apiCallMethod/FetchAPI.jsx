import { useState, useEffect } from "react";

import ApiDataRenderer from "../ApiDataRenderer.jsx";

export default function FetchAPI() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ApiDataRenderer data={userData} />
      <pre style={{ background: "#eee", padding: "10px" }}>
        <code>{sourceCode}</code>
      </pre>
    </div>
  );
}

const sourceCode = `export default function FetchAPI() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUserData(data);
    };

    fetchData();
  }, []);
}`;
