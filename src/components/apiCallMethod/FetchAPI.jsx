import ApiDataRenderer from "../ApiDataRenderer.jsx";

export default function FetchAPI() {
  return (
    <div>
      <ApiDataRenderer
        data={[
          { username: "Nick", name: "jabs", email: "usermail@gmail.com", phone: "010-0000-0000" },
        ]}
      />
      <pre style={{ background: "#eee", padding: "10px" }}>
        <code>{"codeString"}</code>
      </pre>
    </div>
  );
}
