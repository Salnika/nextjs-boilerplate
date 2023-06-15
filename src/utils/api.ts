import axios from "axios";
import { store } from "../redux/store";

const getApiUrl = () =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_API_URL
  }/api`;

/* export const apiBuilder = () => {
  const { token }: any = store.getState().user;
  const instance = axios.create({
    baseURL: getApiUrl(),
    timeout: 300000,
    headers: { Authorization: `bearer ${token}` },
  });
  return instance;
};
 */

export default getApiUrl;
