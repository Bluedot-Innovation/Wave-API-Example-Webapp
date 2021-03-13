import axios from "axios";

const WAVE_URLS = {
  AU: "https://au1-events.bluedot.io/wave",
  EU: "https://eu1-events.bluedot.io/wave",
  US: "https://us1-events.bluedot.io/wave",
  DEV: "https://dev1-events.dev-bluedot.com/wave",
};

function getUrlByRegion(region) {
  switch (region) {
    case "AU":
      return WAVE_URLS.AU;
    case "EU":
      return WAVE_URLS.EU;
    case "US":
      return WAVE_URLS.US;
    case "DEV":
      return WAVE_URLS.DEV;
    default:
      throw new Error(`Unhandled Region ${region}`);
  }
}

export async function postWaveEvent(payload, region) {
  if (!payload.projectId) throw new Error('projectId is required')
  if (!payload.destinationId) throw new Error('destinationId is required')

  const url = getUrlByRegion(region);
  const options = { headers: { 'x-bluedot-api-key': payload.projectId }}
  const response = await axios.post(url, payload);
  return response.data;
}
