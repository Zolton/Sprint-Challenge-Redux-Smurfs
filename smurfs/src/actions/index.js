import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const SMURF_FETCH = "SMURF_FETCH";
export const PAPA_SMURF_WINS = "SMURF_FETCH_FAIL";
export const GARGAMEL_WINS = "SMURF_FETCH_SUCCESS";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
    type: SMURF_FETCH
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Successful Response message below"), 
      console.log(res.data);
      dispatch({
        type: GARGAMEL_WINS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log("Rejection message below"), 
      console.log(rej);
      dispatch({
        type: PAPA_SMURF_WINS,
        payload: rej.response
      });
    });
};
