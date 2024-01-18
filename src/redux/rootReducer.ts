import {combineReducers} from 'redux';
import imageSlice from './slices/imageSlice';

const rootReducer = combineReducers({
  image: imageSlice,
});

export default rootReducer;
