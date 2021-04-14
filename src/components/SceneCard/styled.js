import styled from "styled-components";

export const SceneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  height: 70vh;
  overflow: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  h6 {
    margin: 0;
  }

  img {
    /* 
      This resolves the same as "width: clamp(70px, 45%, 250%)";
      Adding this to be compatible with old browsers.
    */
    width: max(70px, min(45%, 200px));
    min-width: 70px;
    max-width: 180px;
  }
  
  @media only screen and (max-width: 30em) {
    h6 {
      font-size: 4vw;
    }
  }
`;

export const Text = styled.p`
  line-height: 1.65rem;
  text-align: center;
  max-width: min(75%, 400px);
  margin-bottom: min(15%, 40px);
  /* 
      This resolves the same as "font-size:clamp(0.7rem, 3.5vw, 1rem)";
      Adding this to be compatible with old browsers.
    */
  font-size: max(0.7rem, min(3.5vw, 1rem));

  @media only screen and (max-width: 30em) {
    font-size: 3.5vw;
  }
`;
