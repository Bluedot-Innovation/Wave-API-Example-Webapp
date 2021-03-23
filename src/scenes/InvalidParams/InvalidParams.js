import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SceneCard from "../../components/SceneCard";
import invalidParamsImage from "../../images/invalid_params.svg";

export default function InvalidParams() {
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessages = {
    WRONG_PARAMS: `
      One or more of the parameters in the URL are missing or wrong.
      Please check that Project ID, Destination ID and Region are correct.
    `,
    GENERIC_ERROR: `
      We haven't been able to inform our staff about your arrival.
      Please refresh the page and try again or send a message to our friendly Support Team.
    `,
  };

  useEffect(() => {
    const { state } = location;

    if (state?.error?.errorCode === "RB001" || state?.error?.errorCode === "WD001") {
      setErrorMessage(errorMessages.WRONG_PARAMS);
    } else {
      setErrorMessage(errorMessages.GENERIC_ERROR);
    }
  }, [location]);

  const ContactUsLink = (
    <a
      href="mailto:help@bluedot.io?subject=Curbside Web Sample - New URL request"
      target="_blank"
      rel="noreferrer"
    >
      Contact Us
    </a>
  );

  return (
    <SceneCard
      title="Something went wrong"
      text={errorMessage}
      image={invalidParamsImage}
      buttonText={ContactUsLink}
    />
  );
}
