import Axios from "axios";

export const tariffApi = Axios.create({
  baseURL: "http://localhost:6061",
});
