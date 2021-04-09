import styled from "styled-components";

export const SceneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 70vh;

  a {
    text-decoration: none;
    color: inherit;
  }

  h6 {
    margin: 0;
  }

  img {
    width: clamp(70px, 45%, 250px);
  }
`;

export const Text = styled.p`
  line-height: 1.65rem;
  text-align: center;
  max-width: min(75%, 400px);
  margin-bottom: min(15%, 40px);
  font-size: clamp(0.7rem, 3.5vw, 1rem);
`;
