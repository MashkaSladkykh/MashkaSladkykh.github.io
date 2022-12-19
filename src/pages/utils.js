import { API_KEY, API_URL } from './constans';

export const generateApiUrl = () => `${API_URL}?access_token=${API_KEY}`;
export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
  Math.ceil(min);
