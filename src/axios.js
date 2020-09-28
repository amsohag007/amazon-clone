import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-fire-stripe/us-central1/api", //Api url (cloud function)
}); //http://localhost:5001/clone-fire-stripe/us-central1/api

export default instance;
