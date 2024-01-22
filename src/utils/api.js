import axios from 'axios';
import { getCurrentDateInISOFormat } from './utils';
getCurrentDateInISOFormat;
const api = axios.create({
  baseURL: 'https://api.carbonintensity.org.uk',
});

export const getIntensityScore = () => {
  return api.get(`/intensity`).then((response) => {
    return response.data;
  });
};

export const getIntensityRange = (dateTime) => {
  let dateQuery = getCurrentDateInISOFormat();
  if (dateTime.length > 0) {
    dateQuery = dateTime;
  }
  console.log(dateQuery);
  return api.get(`/intensity/${dateQuery}/pt24h`).then((response) => {
    console.log(response.data, 'response with date');
    return response.data;
  });
};

export const getRegionalIntensityRange = (region) => {
  let currentDate = getCurrentDateInISOFormat();

  return api
    .get(`/regional/intensity/${currentDate}/fw24h/regionid/${region}`)
    .then((response) => {
      return response.data;
    });
};

export const getGenerationMix = async (dateTime) => {
  let dateQuery = getCurrentDateInISOFormat();
  if (dateTime.length > 0) {
    dateQuery = dateTime;
  }
  return api.get(`/generation/${dateQuery}/pt24h`).then((response) => {
    return response.data;
  });
};

// https://api.carbonintensity.org.uk/regional/intensity/2023-08-25T12:35Z/fw24h/regionid/3
