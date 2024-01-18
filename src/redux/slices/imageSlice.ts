import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ImageState = {
  paths: string[];
  imageSelected: string;
};

const initialState: ImageState = {
  paths: [],
  imageSelected: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<string>) => {
      state.paths.push(action.payload);
    },
    selectedImage: (state, action: PayloadAction<string>) => {
      state.imageSelected = action.payload;
    },
  },
});

export const {addPhoto, selectedImage} = imageSlice.actions;
export default imageSlice.reducer;
