import axios from "axios";
import { CHECK_USER } from "../constants";

const checkUser = ({ email, password }) => {
  return async dispath => {
    const { data } = await axios.post("https://reqres.in/api/login", {
      email,
      password
    });
    dispath({
      type: CHECK_USER,
      payload: data
    });
  };
};
export { checkUser };
