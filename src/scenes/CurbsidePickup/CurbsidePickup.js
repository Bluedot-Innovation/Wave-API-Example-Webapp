import { useHistory } from "react-router-dom";
import { useAppContext } from "../../appContext"
import SceneCard from "../../components/SceneCard";
import curbsidePickupImage from "../../images/curbside_pickup.svg";

export default function CurbsidePickup() {
  const { dispatch } = useAppContext()
  const history = useHistory();
  const text = `
        Great! We’ve let know our staff that you have arrived. 
        Someone will be out shortly.
    `;
  
  const handleOnClickButton = () => {
    dispatch({ type: "resetState"})
    history.push("/")
  }

  return (
    <SceneCard
      title="Curbside Pickup"
      image={curbsidePickupImage}
      text={text}
      buttonText="Order Complete"
      onClickButton={handleOnClickButton}
    />
  );
}
