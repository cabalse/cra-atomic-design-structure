import axios from 'axios';

const getData = () => {
  return axios.get(process.env.REACT_APP_API_URL);
}

export default getData;
