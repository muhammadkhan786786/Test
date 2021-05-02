import fetch from 'node-fetch';
export const getMarsData = async (url?: string) => {
  if (!url) {
    return null;
  }
  
  try {
    const response = await fetch(url, {method: 'GET'});

    if (response.status === 200) {
      return await response.json();
    }

    return await response.json();
  } catch (error) {
    console.log('Error in fetching Mars Data: ', error); // eslint-disable-line no-console
    return null;
  }
};
