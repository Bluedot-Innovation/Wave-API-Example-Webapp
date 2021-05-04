import {useState, useCallback} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../../appContext";
import { postWaveEvent, getWaveParamsFromSearchUrl, EVENT_TYPE } from "../../waveApi";
import SceneCard from "../../components/SceneCard";
import confirmArrivalImage from "../../images/confirm_arrival.svg";

export default function ConfirmArrival() {
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const urlParams = useLocation();
  const { state } = useAppContext();

  const text = `
        Hi ${
          state.customerName || "No Name"
        }, please head to our curbside parking space. 
        Look for the Curbside sign and park as close to it as possible.
    `;

  const handleOnClickButton = useCallback(async () => {
    if(loading){
      return
    }
    setLoading(true)
    const { projectId, destinationId, region } = getWaveParamsFromSearchUrl(
      decodeURI(urlParams.search)
    );
    
    const eventMetaData = {
      OrderId: state.orderId,
      CustomerName: state.customerName,
      eventType: EVENT_TYPE.ARRIVAL
    };

    try {
      await postWaveEvent(projectId, destinationId, region, eventMetaData);
      setLoading(false)
      history.push(`/curbside-pickup${urlParams.search}`);
    } catch (error) {
      setLoading(false)
      history.push("/invalid-params", { error: error.response?.data || error });
    }
  }, [loading, urlParams.search, state.orderId, history, state.customerName]);

  return (
    <SceneCard
      title="Confirm Arrival"
      text={text}
      image={confirmArrivalImage}
      buttonText="I'm here"
      onClickButton={handleOnClickButton}
      loading={loading}
    />
  );
}
