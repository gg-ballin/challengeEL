import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ImageData = {
  path: string;
  latitude: number;
  longitude: number;
};

type ImageState = {
  paths: ImageData[];
  imageSelected: ImageData | null;
  limitReached: boolean;
};

const initialState: ImageState = {
  paths: [],
  imageSelected: null,
  limitReached: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<ImageData>) => {
      state.paths.push(action.payload);
    },
    selectedImage: (state, action: PayloadAction<string>) => {
      const selectedImageData = state.paths.find(
        data => data.path === action.payload,
      );
      state.imageSelected = selectedImageData || null;
    },
    hasLimitReached: state => {
      state.limitReached = true;
    },
  },
});

export const {addPhoto, selectedImage} = imageSlice.actions;
export default imageSlice.reducer;
