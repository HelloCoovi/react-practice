import { useState } from "react";
import "./App.css";

import SelectCodeSection from "./components/SelectCodeSection.jsx";
import ApiCallSection from "./components/ApiCallSection.jsx";

function App() {
  const [practiceView, setPracticeView] = useState(null);

  return (
    <>
      <div className="main-container">
        <nav className="nav-section">
          <button className="fetch-btn">API 호출</button>
        </nav>
        <div className="content-container">
          <SelectCodeSection />
          <ApiCallSection />
        </div>
      </div>
    </>
  );
}

export default App;
