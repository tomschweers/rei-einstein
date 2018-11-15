import { Body } from "native-base";
import { assets } from './Assets.js';

const TOKEN = assets.token;

export const getSentiment = (query) => {
  const URL = 'https://api.einstein.ai/v2/language/sentiment';
  const BODY_OBJ = { 
    modelId: 'CommunitySentiment',
    document: query
  }
  return fetch(URL, { 
    method: 'POST', 
    headers: new Headers({
      'Authorization': 'Bearer ' + TOKEN, 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(BODY_OBJ)
  })
  .then((res) => res.json())
}
