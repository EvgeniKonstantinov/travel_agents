import axios from "axios";
import { NEWS_IMPORT } from "../constants";

const importNews = ({ apiKey }) => {
  return async dispath => {
    const { data } = await axios.post("https://newsapi.org/v2/top-headlines", {
      apiKey
    });
    // console.log({ data });
    dispath({
      type: NEWS_IMPORT,
      payload: data
    });
  };
};
export { importNews };
