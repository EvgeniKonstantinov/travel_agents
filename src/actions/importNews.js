import axios from "axios";
import { NEWS_IMPORT } from "../constants";

const importNews = () => {
  return async dispath => {
    const { data } = await axios.get(
      "https://api.github.com/orgs/facebook/repos",

      {
        headers: {
          accept: "application/json"
        }
      }
    );

    dispath({
      type: NEWS_IMPORT,
      payload: data
    });
  };
};
export { importNews };
