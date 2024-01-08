import { useState, useEffect } from "react";
import axios from "axios";

import ApiDataRenderer from "../ApiDataRenderer.jsx";

export default function Axios() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(res.data);
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

const sourceCode = `export default function Axios() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(res.data);
    };

    fetchData();
  }, []);
}`;
