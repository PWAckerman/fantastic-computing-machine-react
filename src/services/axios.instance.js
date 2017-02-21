import axios from 'axios';

const instance = axios.create({
  // withCredentials: true
});

const ex = {
  instance: instance
}

export default ex;
