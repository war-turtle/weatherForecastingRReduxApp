import axios from 'axios';

const API_KEY = '15efe8d5e25ecaf79ed9e79504ccf3c0';

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${rootURL}&q=${city},us`;

  // fetch(url).then(res => res.json()).then()

  const request = axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload:request
  };
}
