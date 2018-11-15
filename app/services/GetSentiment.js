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

export const alertMessage = (positive) => {
  // Result seems to always be positive, so we will create our own metrics
  if (positive > .9) {
    alert('You are too kind ;)')
  }
  else if (positive > .8) {
    alert('Your comment is very well appreciated! Come back anytime.')
  }
  else if (positive > .7) {
    alert('Glad to hear that. We are striving to get better everyday.')
  }
  else if (positive > .6) {
    alert('Wow. We will take that into consideration.')
  }
  else if (positive > .6) {
    alert('Wait a minute now, just hold your horses!')
  }
  else {
    alert('Be careful with your words. Einstein has feelings too.')
  }
}