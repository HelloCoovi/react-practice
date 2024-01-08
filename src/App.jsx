import { useState } from "react";
import "./App.css";

import SelectCodeSection from "./components/SelectCodeSection.jsx";
import ApiCallSection from "./components/ApiCallSection.jsx";
import styled from "styled-components";

function MethodButton(props) {
  const isSelected = props.practiceView === props.method;
  return (
    <StyledButton $isSelected={isSelected} data-practice={props.method}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  text-decoration: ${(props) => (props.$isSelected ? "underline" : "none")};
`;

function App() {
  const [practiceView, setPracticeView] = useState("fetch-method");

  const handleMethodSelect = ({ target }) => {
    const practiceView = target.dataset.practice;
    if (practiceView) setPracticeView(practiceView);
  };

  return (
    <>
      <div className="main-container">
        <nav className="nav-section" onClick={handleMethodSelect}>
          <MethodButton method={"fetch-method"} practiceView={practiceView}>
            API 호출
          </MethodButton>
          <MethodButton method={"test1"} practiceView={practiceView}>
            test1
          </MethodButton>
          <MethodButton method={"test2"} practiceView={practiceView}>
            test2
          </MethodButton>
        </nav>
        <div className="content-container">
          <SelectCodeSection selectedMethod={practiceView} />
        </div>
      </div>
    </>
  );
}

export default App;
