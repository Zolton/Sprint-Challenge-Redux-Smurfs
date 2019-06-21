/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

export const GET_SMURF = "GET_SMURF"


export function getSmurfs = {
  type: 
}

export const addNewTask = "ADD_NEW_TASK";

export function addTask(newTask) {
  return {
    type: addNewTask,
    payload: newTask
  };
}

export const markComplete = "TASK_COMPLETED";
// mark is what's being passed - simply the item ID.  Just pass it along as the payload
export function markCompleted(mark) {
  return {
    type: markComplete,
    payload: mark
  };
}
