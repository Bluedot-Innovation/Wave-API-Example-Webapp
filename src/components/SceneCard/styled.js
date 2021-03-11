import styled from "styled-components";

export const SceneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 70vh;

  h6 {
    margin: 0;
  }

  img {
      max-width: 60%;
  }
`;

export const Text = styled.p`
    line-height: 1.65rem;
    text-align: center;
    max-width: min(75%, 400px);
    margin-bottom: 15%;
    font-size: max(1rem, 2.5vw);
`
