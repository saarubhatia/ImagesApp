import {
  FETCH_IMAGES,
  FETCH_STICKERS,
  SEARCH_IMAGES,
  SEARCH_STICKERS,
} from '../actions/images';
const initialState = {
  images: [],
  stickers: [],
};

export default (
  state = initialState,
  action: {respData: any; type: any; offset: any},
) => {
  const {respData, type, offset} = action;
  switch (type) {
    case FETCH_IMAGES:
      let newImages;
      if (offset === 0) {
        newImages = respData;
      } else {
        newImages = [...state.images, ...respData];
      }
      return {
        ...state,
        images: newImages,
      };
    case SEARCH_IMAGES:
      return {
        ...state,
        images: respData,
      };

    case FETCH_STICKERS:
      let newStickers;
      if (offset === 0) {
        newStickers = respData;
      } else {
        newStickers = [...state.stickers, ...respData];
      }
      return {
        ...state,
        stickers: newStickers,
      };
    case SEARCH_STICKERS:
      return {
        ...state,
        stickers: respData,
      };

    default:
      return state;
  }
};
