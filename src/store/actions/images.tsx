import {API_KEY, BASE_URL, SEARCH_URL} from '../../constants/EnvVar';

export const FETCH_IMAGES = 'FETCH_IMAGES';

export const fetchImages = (offsetNumber: any) => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&limit=20&offset=${offsetNumber}`,
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const respData = await response.json();

      dispatch({
        type: FETCH_IMAGES,
        respData: respData.data,
        offset: offsetNumber,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const searchImages = (queryString: string, offsetNumber: number) => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch(
        `${SEARCH_URL}?api_key=${API_KEY}&q=${queryString}&limit=20&offset=${offsetNumber}`,
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const respData = await response.json();

      dispatch({
        type: FETCH_IMAGES,
        respData: respData.data,
        offset: offsetNumber,
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
