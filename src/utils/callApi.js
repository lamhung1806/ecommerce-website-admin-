import axios from "axios";
import { url } from "../constains/config";

function callApi(endpoint, method, body) {
  return axios({
    url: `${url}/${endpoint}`,
    method: method,
    body: body,
  }).catch(() => console.log("lỗi api"));
}
export default callApi;
