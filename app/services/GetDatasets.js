import { assets } from './Assets.js';

const TOKEN = assets.token;

export const getDatasets = () => {
  const URL = 'https://api.einstein.ai/v1/vision/datasets';
  return fetch(URL, { 
    method: 'GET', 
    headers: new Headers({
      'Authorization': 'Bearer ' + TOKEN, 
      'Content-Type': 'application/json'
    })
  })
  .then((res) => res.json());
}
