import config from "../../config/environment";
import { getJSON } from "./fetch";

/**
 * getCreditReport
 * @description - get current users creditReport
 */
export const getCreditReport = async () => {
  if (typeof window === "undefined") {
    const url = `${config.api.host}/${config.api.endpoints.creditReport}`;
    return await getJSON(url);
  }
};
