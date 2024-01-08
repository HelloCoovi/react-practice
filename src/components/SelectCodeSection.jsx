import { useEffect, useState } from "react";
import styled from "styled-components";

import ApiCallSection from "./ApiCallSection.jsx";

export default function SelectCodeSection({ selectedMethod }) {
  const [selectExample, setSelectExample] = useState();

  const buttonText =
    {
      "fetch-method": ["fetch API", "axios", "custom Hook", "useFetch", "SWR"],
    }[selectedMethod] || [];

  const handleMethodSelect = ({ target }) => {
    const method = target.dataset.method;
    if (method) setSelectExample(method);
  };

  return (
    <>
      <ul style={ulStyle} onClick={handleMethodSelect}>
        {buttonText.map((text, idx) => {
          return (
            <li key={idx}>
              <StyledButton
                style={selectExample === text ? { textDecoration: "underline" } : null}
                data-method={text}
              >
                {text}
              </StyledButton>
            </li>
          );
        })}
      </ul>
      <ApiCallSection selectExample={selectExample} />
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 3px 10px;

  background-color: #a8d8ea;
`;

const ulStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",

  margin: "12px",
};
