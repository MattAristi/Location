import * as FileSystem from 'expo-file-system'

import Place from '../model/Place'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action)=> {
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image)
      state.places.push(newPlace)
    }
  },
});

export const {addPlace} = placeSlice.actions;

export const savePlace = (title, image) => {
  return async (dispatch) => {
  // const  fileName = image.split('/').pop()
  // const path = FileSystem.documentDirectory + fileName;
  try{
    dispatch(addPlace({title, image}))
    // await FileSystem.moveAsync({
    //   from: image,
    //   to: path,
    // })
  } catch (error) {
    console.log(error);
    throw error
  }
  
  }
}

export default placeSlice.reducer;
