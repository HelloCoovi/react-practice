import styled from "styled-components";

export default function ApiDataRenderer({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <StyledUl>
      {data.map((user, idx) => {
        return (
          <StyledLi key={idx}>
            <p>NickName: {user.username}</p>
            <p>UserName: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;
const StyledLi = styled.li`
  margin: 3px auto;
  border: 1px solid black;
  padding: 3px;
  border-radius: 3px;
`;
