/*==================================================
/src/store/index.js

It contains the necessities and accessories for constructing the Redux Store.
It creates a single Redux Store that holds the complete state tree of the app, so that the Redux Store state can access the states in all Reducers. 
================================================== */

import { configureStore, combineSlices, combineReducers } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

// Import all Reducers from the barrel file (/src/store/reducers/index.js)

import * as reducers from './reducers';
// const rootReducer = combineReducers({ reducer })
// console.log(rootReducer)
const logger = createLogger({ collapsed: true });  // Collapse console messages when displayed
export default configureStore({
    reducer: {
        allCampuses: reducers.allCampuses,
        campus: reducers.campus,
        allStudents: reducers.allStudents,
        student: reducers.student
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)
})



// Construct the Redux Store:
// Create a single Root Reducer to combine all Reducers, so that the Redux Store state can
// access the states in all Reducers of the app.
// Create a logger middleware to log dispatched Actions in console,
// so that it displays prevState, nextState, and Action when an Action is dispatched.
// const logger = createLogger({ collapsed: true });  // Collapse console messages when displayed
// Create a Redux Store using Root Reducer and a middleware pipeline consisting of Thunk and logger.
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// Export the Redux Store by default, which will be provided to and injected within our entire application
