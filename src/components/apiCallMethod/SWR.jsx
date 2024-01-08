import useSWR from "swr";

import ApiDataRenderer from "../ApiDataRenderer.jsx";

export default function SWR() {
  const fetcher = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return data;
  };

  const { data: userData, error } = useSWR("userData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!userData) return <div>SWRLoading...</div>;

  return (
    <div>
      <ApiDataRenderer data={userData} />
      <pre style={{ background: "#eee", padding: "10px" }}>
        <code>{sourceCode}</code>
      </pre>
    </div>
  );
}

const sourceCode = `import useSWR from "swr";

export default function SWR() {
  const fetcher = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return data;
  };

  const { data: userData, error } = useSWR("userData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!userData) return <div>SWRloading...</div>;
}`;
