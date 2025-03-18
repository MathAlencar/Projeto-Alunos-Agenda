import axios from 'axios';
// Definindo uma URL padrão para que não precise repetir sempre.
export default axios.create({
  baseURL: 'http://34.151.231.108/',
});
