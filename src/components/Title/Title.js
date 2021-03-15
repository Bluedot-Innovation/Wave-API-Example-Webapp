import styled from "styled-components";

const TitleStyle = styled.h2`
position: relative;
font-weight: 800;
font-size: clamp(1rem, 3vh, 1.5rem);
margin-bottom: min(20%, 4rem);

&::before {
  content: " ";
  height: 30px;
  width: 30px;
  position: absolute;
  top: -12px;
  left: -12px;
  z-index: -1;
  background-color: var(--SCREEN);
  border-radius: 8px;
}
`;

export default function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>
}
