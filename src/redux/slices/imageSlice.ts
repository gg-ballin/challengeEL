import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ImageData = {
  path: string;
  latitude: number;
  longitude: number;
};

type ImageState = {
  paths: ImageData[];
  imageSelected: ImageData | null;
};

const initialState: ImageState = {
  paths: [],
  imageSelected: null,
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
  },
});

export const {addPhoto, selectedImage} = imageSlice.actions;
export default imageSlice.reducer;
