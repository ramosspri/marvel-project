import axios from 'axios';

const apiGithub = axios.create({
  baseURL: 'https://api.github.com',
  // client_id: 'Iv1.81893e52b7f2d796',
  // client_secret: '6f06c158da9e34317bf714a6e77831af8318a093',
});

export default apiGithub;
