import axios from 'axios';
import md5 from 'md5';

const publicKey = 'e3c713bcf8308ea0d200d902a74784ed';
const privateKey = '95f9aa2a11ef3e4f33b70e27c1bb0864ccf91f7a';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
