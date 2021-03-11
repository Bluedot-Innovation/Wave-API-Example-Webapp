import styled from "styled-components";

export const SceneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  height: 80vh;

  h6 {
    margin: 0;
  }

  img {
      max-width: 60%;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-weight: 800;

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

export const Text = styled.p`
    line-height: 1.65rem;
    text-align: center;
    max-width: min(75%, 400px);
    margin-bottom: 15%;
    font-size: max(1rem, 2.5vw);
`
