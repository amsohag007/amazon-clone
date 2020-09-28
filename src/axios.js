import axios from "axios";

const instance = axios.create({
  baseURL: "...", //Api url (cloud function)
});

export default instance;
