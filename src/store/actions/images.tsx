import {
  API_KEY,
  BASE_URL,
  SEARCH_URL,
  STICKER_BASE_URL,
  STICKER_SEARCH_URL,
} from '../../constants/EnvVar';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_STICKERS = 'FETCH_STICKERS';
export const SEARCH_IMAGES = 'SEARCH_IMAGES';
export const SEARCH_STICKERS = 'SEARCH_STICKERS';

export const fetchImages = (offsetNumber: any) => {
  return async (
    dispatch: (arg0: {type: string; respData: any; offset: any}) => void,
  ) => {
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
      throw err;
    }
  };
};

export const searchImages = (queryString: string, offsetNumber: number) => {
  return async (
    dispatch: (arg0: {type: string; respData: any; offset: number}) => void,
  ) => {
    try {
      const response = await fetch(
        `${SEARCH_URL}?api_key=${API_KEY}&q=${queryString}&limit=20&offset=${offsetNumber}`,
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const respData = await response.json();

      dispatch({
        type: SEARCH_IMAGES,
        respData: respData.data,
        offset: offsetNumber,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchStickers = (offsetNumber: any) => {
  return async (
    dispatch: (arg0: {type: string; respData: any; offset: any}) => void,
  ) => {
    try {
      const response = await fetch(
        `${STICKER_BASE_URL}?api_key=${API_KEY}&limit=20&offset=${offsetNumber}`,
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const respData = await response.json();

      dispatch({
        type: FETCH_STICKERS,
        respData: respData.data,
        offset: offsetNumber,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const searchStickers = (queryString: string, offsetNumber: number) => {
  return async (
    dispatch: (arg0: {type: string; respData: any; offset: number}) => void,
  ) => {
    try {
      const response = await fetch(
        `${STICKER_SEARCH_URL}?api_key=${API_KEY}&q=${queryString}&limit=20&offset=${offsetNumber}`,
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const respData = await response.json();

      dispatch({
        type: SEARCH_STICKERS,
        respData: respData.data,
        offset: offsetNumber,
      });
    } catch (err) {
      throw err;
    }
  };
};
