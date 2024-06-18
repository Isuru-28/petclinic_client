import axios from 'axios';

// const API_URL = 'http://localhost:3001/api/auth/';
export const API_URL = 'https://petclinic-server.onrender.com/api/auth/';
export const base_url = 'https://petclinic-server.onrender.com';
const login = async (email, password) => {
  const response = await axios.post(API_URL + 'login', { email, password });
  if (response.status === 200) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
  return axios.post(API_URL + 'logout');
};

export default { login, logout};
