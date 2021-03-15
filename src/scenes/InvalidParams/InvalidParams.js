import SceneCard from "../../components/SceneCard";
import invalidParamsImage from "../../images/invalid_params.svg";

export default function InvalidParams() {
  const text = `
        One or more of the parameters in the URL are missing or wrong.
        Please check that ProjectId, Destination ID and Region are correct.
    `;
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
      text={text}
      image={invalidParamsImage}
      buttonText={ContactUsLink}
    />
  );
}
