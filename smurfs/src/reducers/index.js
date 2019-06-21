import {
  SMURF_FETCH,
  PAPA_SMURF_WINS,
  GARGAMEL_WINS,
  NEW_SMURF,
  SMURF_SOUP,
  DIE_ANOTHER_DAY,
  CAT_FOOD
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  error: "",
  fetchingSmurfs: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCH:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case PAPA_SMURF_WINS:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case GARGAMEL_WINS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: action.payload
      };
    case SMURF_SOUP:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case NEW_SMURF:
      return {
        ...state,
        error: "",
        smurfs: [...state, action.payload]
      };
    case DIE_ANOTHER_DAY:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case CAT_FOOD:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        smurfs: [...state, action.payload]
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
