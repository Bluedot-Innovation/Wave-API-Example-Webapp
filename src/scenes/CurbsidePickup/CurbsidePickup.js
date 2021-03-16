import { useHistory, useLocation } from "react-router-dom";
import { useAppContext, RESET_STATE } from "../../appContext"
import SceneCard from "../../components/SceneCard";
import curbsidePickupImage from "../../images/curbside_pickup.svg";

export default function CurbsidePickup() {
  const { dispatch } = useAppContext()
  const history = useHistory();
  const location = useLocation();
  const text = `
        Great! We’ve let know our staff that you have arrived. 
        Someone will be out shortly.
    `;
  
  const handleOnClickButton = () => {
    dispatch({ type: RESET_STATE })
    history.push(`/${location.search}`)
  }

  return (
    <SceneCard
      title="Curbside Pickup"
      image={curbsidePickupImage}
      text={text}
      buttonText="Start Over"
      onClickButton={handleOnClickButton}
    />
  );
}
