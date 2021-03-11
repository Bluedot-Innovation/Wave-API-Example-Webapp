import { useHistory } from "react-router-dom";
import SceneCard from "../../components/SceneCard";
import curbsidePickupImage from "../../images/curbside_pickup.svg";

export default function CurbsidePickup() {
  const history = useHistory();
  const text = `
        Great! We’ve let know our staff that you have arrived. 
        Someone will be out shortly.
    `;

  return (
    <SceneCard
      title="Curbside Pickup"
      image={curbsidePickupImage}
      text={text}
      buttonText="Order Complete"
      onClickButton={() => history.push("/")}
    />
  );
}
