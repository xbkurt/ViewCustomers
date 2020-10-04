import { selectedApi } from "../../integration-config.json";
import { api1 } from "./mock/api1-response.json";
import { api2 } from "./mock/api2-response.json";
import { api3 } from "./mock/api3-response.json";

const currentApi = selectedApi;
let response = "";

const rootResponse = (stage = currentApi) => {
  switch (currentApi) {
    case 1:
      response = api1;
      break;
    case 2:
      response = api2;
      break;
    case 3:
      response = api3;
      break;
    default:
      break;
  }
  return response;
};

export { rootResponse };

const rootApi = (stage = currentApi) => {
  switch (currentApi) {
    case 1:
      response = 1;
      break;
    case 2:
      response = 2;
      break;
    case 3:
      response = 3;
      break;
    default:
      break;
  }
  return response;
};

export { rootApi };
