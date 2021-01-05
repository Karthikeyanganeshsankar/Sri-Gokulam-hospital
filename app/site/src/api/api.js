import axios from "axios";
const CONFIG = "http://localhost:8000";

const fetchData = async (url, method, data) => {
  var AUTH_TOKEN = sessionStorage.getItem('SGH');
  if (AUTH_TOKEN) {
    axios.defaults.headers['authorization'] = AUTH_TOKEN;
  }
  return await axios[method](CONFIG + url, data);
}
export default fetchData;
