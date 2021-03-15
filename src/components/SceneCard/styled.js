import styled from "styled-components";

export const SceneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 75vh;

  a {
    text-decoration: none;
    color: inherit;
  }

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
    margin-bottom: min(15%, 50px);
    font-size: clamp(0.8rem, 4.5vw, 1.2rem);
`
