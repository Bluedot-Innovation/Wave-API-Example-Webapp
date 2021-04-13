import styled from "styled-components";

const TitleStyle = styled.h2`
  position: relative;
  font-weight: 800;
  font-size: clamp(0.9rem, 2.8vh, 1.5rem);
  margin-bottom: min(15%, 4rem);

  &::before {
    content: " ";
    height: 30px;
    width: 30px;
    position: absolute;
    top: -12px;
    left: -12px;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.NEUTRAL_BACKGROUND};
    border-radius: 8px;
  }

  @media only screen and (max-width: 30em) {
    font-size: 4.5vw;
  }
`;

export default function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}
