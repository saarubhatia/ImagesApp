import {FETCH_IMAGES} from '../actions/images';
const initialState = {
  images: [],
};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};
