import axios from 'axios';
import { getCurrentDateInISOFormat } from './utils';
getCurrentDateInISOFormat;
const api = axios.create({
  baseURL: 'https://api.carbonintensity.org.uk',
});

export const getIntensityScore = () => {
  return api.get(`/intensity`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getIntensityRange = (dateTime) => {
  return api.get(`/intensity/${dateTime}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getRegionalIntensityRange = (region) => {
  let currentDate = getCurrentDateInISOFormat();
  console.log(response.data);
  return api
    .get(`/regional/intensity/${currentDate}/fw24h/regionid/${region}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

// https://api.carbonintensity.org.uk/regional/intensity/2023-08-25T12:35Z/fw24h/regionid/3
