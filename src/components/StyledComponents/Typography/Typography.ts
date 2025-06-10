import styled from "styled-components";

const Typography = styled.h1`
  font-size: 64px;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  margin: 0;
  padding: 20px 0;
`

export { Typography };