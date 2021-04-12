import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../../appContext";
import {
  postWaveEvent,
  getWaveParamsFromSearchUrl,
  EVENT_TYPE,
} from "../../waveApi";
import SceneCard from "../../components/SceneCard";
import onTheWayImage from "../../images/on_the_way.svg";

export default function OnTheWay() {
  const history = useHistory();
  const urlParams = useLocation();
  const { state } = useAppContext();
  const text = `
    Hi ${
      state.customerName || "No Name"
    }, let us know when you're coming to collect your order.
    We'll make sure to have it fresh for when you arrive.
`;

  const handleOnClickButton = async () => {
    const { projectId, destinationId, region } = getWaveParamsFromSearchUrl(
      decodeURI(urlParams.search)
    );

    const eventMetaData = {
      OrderId: state.orderId,
      CustomerName: state.customerName,
      eventType: EVENT_TYPE.ARRIVAL,
    };

    try {
      await postWaveEvent(projectId, destinationId, region, eventMetaData);
      history.push(`/confirm-arrival${urlParams.search}`);
    } catch (error) {
      history.push("/invalid-params", { error: error.response?.data || error });
    }
  };

  return (
    <SceneCard
      title="On The Way"
      text={text}
      image={onTheWayImage}
      buttonText="I'm on the way"
      onClickButton={handleOnClickButton}
    />
  );
}
