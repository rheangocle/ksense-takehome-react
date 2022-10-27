import axios from "axios";

async function retrieveData() =>
  axios.get("https://jsonplaceholder.typicode.com/users");

export default { retrieveData };
