import { useHistory, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAppContext } from "../../appContext";
import { postWaveEvent, getWaveParamsFromSearchUrl } from "../../waveApi";
import SceneCard from "../../components/SceneCard";
import confirmArrivalImage from "../../images/confirm_arrival.svg";

export default function ConfirmArrival() {
  const history = useHistory();
  const urlParams = useLocation();
  const { state } = useAppContext();

  const text = `
        Hi ${
          state.customerName || "No Name"
        }, please head to our curbside parking space. 
        Look for the Curbside sign and park as close to it as possible.
    `;

  const handleOnClickButton = async () => {
    const { projectId, destinationId, region } = getWaveParamsFromSearchUrl(
      decodeURI(urlParams.search)
    );
    
    const eventMetaData = {
      OrderId: nanoid(10),
      CustomerName: state.customerName,
    };

    try {
      await postWaveEvent(projectId, destinationId, region, eventMetaData);
      history.push(`/curbside-pickup${urlParams.search}`);
    } catch (error) {
      history.push("/invalid-params", { error: error.response?.data || error });
    }
  };

  return (
    <SceneCard
      title="Confirm Arrival"
      text={text}
      image={confirmArrivalImage}
      buttonText="I'm here"
      onClickButton={handleOnClickButton}
    />
  );
}
