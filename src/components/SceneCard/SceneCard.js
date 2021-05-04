import { Button } from "@bluedot-innovation/bluedot-ui";
import Loader from "react-loader-spinner";
import Title from "../Title";
import * as styled from "./styled";

export default function SceneCard({
  title,
  image,
  text,
  buttonText,
  onClickButton,
  loading
}) {
  return (
    <styled.SceneCardWrapper>
      <Title>{title}</Title>
      <img src={image} alt="scene card" />
      <styled.Text>{text}</styled.Text>
      <Button semiRound size="small" onClick={onClickButton} disabled={loading}>
          {loading ? (
              <Loader type="Oval" color="#00BFFF" height={35} width={35}/>
          ) : (
              <h6>{buttonText}</h6>
          )}
      </Button>
    </styled.SceneCardWrapper>
  );
}
