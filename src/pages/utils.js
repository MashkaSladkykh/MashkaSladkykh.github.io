import {API_KEY, API_URL} from './constans';

export const generateApiUrl = () => `${API_URL}?access_token=${API_KEY}`;
export const generateRandomPicture = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);


export const convertDate = date => new Date(date).toDateString().split(' ').slice(1).join(' ');
// export const convertMinutes = mins => {
//     var hours = Math.trunc(mins/60);
//     var minutes = mins % 60;
//     return hours +"h "+ minutes + "m";
// }
