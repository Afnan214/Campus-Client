/*==================================================
/src/store/reducers/campuses.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import * as at from "../actions/actionTypes";  // Import Action Types ("at" keyword for Action Type)

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campuses: []
}

export const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {
    allCampusesFetched(state, action) {
      state.campuses = action.payload
    },
    campusCreated(state, action) {
      state.campuses.push(action.payload)
    },
    campusEdited(state, action) {
      state.campuses = state.campuses.map(campus => {
        return (
          campus.id === action.payload.id ? action.payload : campus
        )
      })
    },
    campusDeleted(state, action) {
      state.campuses = state.campuses.filter(campus => campus.id !== action.payload)
    }
  }
})
export const { allCampusesFetched, campusCreated, campusEdited, campusDeleted } = campusesSlice.actions
export default campusesSlice.reducer

// // REDUCER:
// const allCampuses = (state = [], action) => {  // Empty array as default Initial State
//   switch (action.type) {
//     case at.FETCH_ALL_CAMPUSES:
//       return action.payload;
//     default:
//       // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
//       return state;
//   }
// };

// export default allCampuses;