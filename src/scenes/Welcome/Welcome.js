import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getWaveParamsFromSearchUrl } from "../../waveApi";
import SceneCard from "../../components/SceneCard";
import welcomeImage from "../../images/welcome.svg";

export default function Welcome() {
  const history = useHistory();
  const location = useLocation();
  const text = `
        This is an example on how to use Bluedot for a Curbside experience from the Web
    `;

  useEffect(() => {
    try {
      // Throws an error if the URL doesn't have the expected params
      getWaveParamsFromSearchUrl(location.search);
    } catch (error) {
      history.push("/invalid-params", { error });
    }
  }, [location.search, history]);

  const handleOnClickButton = () => {
    history.push(`/order-placement${location.search}`);
  };

  return (
    <SceneCard
      title="Curbside On Web"
      image={welcomeImage}
      text={text}
      buttonText="Start"
      onClickButton={handleOnClickButton}
    />
  );
}
