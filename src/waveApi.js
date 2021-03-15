import axios from "axios";

export async function postWaveEvent(
  projectId,
  destinationId,
  region,
  customEventMetaData
) {
  if (!projectId || !destinationId || !region)
    throw new Error("projectId, destinationId and region are required");

  const url = getUrlByRegion(region);
  const body = { destinationId, customEventMetaData }
  const options = { headers: {
    "x-bluedot-api-key": projectId 
    } 
  };
  const response = await axios.post(url, body, options);
  return response.data;
}


// Helper Functions
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


export function getWaveParamsFromSearchUrl(searchUrl) {
  const searchParams = new URLSearchParams(searchUrl);
  if (
    searchParams.has("projectId") &&
    searchParams.has("destinationId") &&
    searchParams.has("region")
  ) {
    return {
      projectId: searchParams.get("projectId"),
      destinationId: searchParams.get("destinationId"),
      region: searchParams.get("region"),
    };
  }

  throw new Error('One or more of the required URL parameters are missing.');
}
