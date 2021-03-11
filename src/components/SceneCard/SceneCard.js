import { Button } from "@bluedot-innovation/bluedot-ui";
import * as styled from "./styled";

export default function SceneCard({ title, image, text, buttonText, onClickButton }) {
  return (
    <styled.SceneCardWrapper>
      <styled.Title>{title}</styled.Title>
      <img src={image} alt="scene card" />
      <styled.Text>{text}</styled.Text>
      <Button semiRound size="small" onClick={onClickButton}>
        <h6>{buttonText}</h6>
      </Button>
    </styled.SceneCardWrapper>
  );
}
