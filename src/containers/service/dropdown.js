import axios from "axios";
import * as selectURL from "../utils/urlDropdown";

export const getCollegesDropdown = (country) => {
  return axios.get(`${selectURL.getURL}${country}`);
};
