import { useHistory } from "react-router-dom";
import SceneCard from "../../components/SceneCard";
import burgerImage from "../../images/burger.svg";

export default function OrderPlacement() {
  const history = useHistory();
  const text = `
        Hi Kate, please head to our curbside parking space. Look for the large
        purple Curbside sign and park as close to it as possible.
    `;
  return (
    <SceneCard
      title="Order Placement"
      image={burgerImage}
      text={text}
      buttonText="Place Order"
      onClickButton={() => history.push("/confirm-arrival")}
    />
  );
}
