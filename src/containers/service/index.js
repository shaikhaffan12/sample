import axios from "axios";
import * as URL from "../utils/url";

export const getCollegesAPI = (collegeName, country) => {
  return axios.get(
    `${URL.baseURL}${collegeName}${country ? "&country=" + country : ""}`
  );
};
