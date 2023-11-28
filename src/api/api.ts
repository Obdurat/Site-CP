import axios from "axios";
import { QueryClient } from "react-query";

export const apiClient = new QueryClient();

export default class API {
  public static fetchUA() {
    const result = axios.get("https://httpbin.org/get");
    return result
  }
}