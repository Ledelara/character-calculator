import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.headerBg};
  color: var(--neutral-0);
  width: 100%;
  border-radius: 15px;
`

export { Header };