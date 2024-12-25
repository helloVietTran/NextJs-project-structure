import Config from "../config/config";
import store from "@/redux/store";
import axios, { AxiosRequestConfig } from "axios";

// interface IFetcherOptions {
//   token?: string;
//   withToken?: boolean;
//   withMetadata?: boolean;
//   displayError?: boolean;
//   isLandingPage?: boolean;
//   isFormData?: boolean;
//   xCompanyId?: number;
// }

export async function fetcher<T>(
  config: AxiosRequestConfig
  // options?: IFetcherOptions
): Promise<T> {
  const token = store.getState();
  const timeout = Config.CONFIG_API.TIMEOUT;
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    baseURL: Config.CONFIG_API.API_BASE_URL,
    timeout: timeout,
  });
  if (token) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
  return new Promise((resolve, reject) => {
    instance
      .request(config)
      .then((response) => {
        if (response) {
          resolve(response.data.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
