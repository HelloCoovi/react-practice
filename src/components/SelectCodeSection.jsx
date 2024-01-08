import styled from "styled-components";

export default function SelectCodeSection() {
  const buttonText = ["fetch API", "axios", "custom Hook", "useFetch", "SWR"];

  return (
    <ul style={ulStyle}>
      {buttonText.map((text, idx) => {
        return (
          <li key={idx}>
            <StyledButton>{text}</StyledButton>
          </li>
        );
      })}
    </ul>
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
