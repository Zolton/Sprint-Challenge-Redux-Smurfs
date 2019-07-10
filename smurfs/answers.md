In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - events done by user that dispatch a request to the action creator which sends the action to the reducer
reducer - only function allowed to modify the store
store - sole source of state for the entire app, where all the important changes occur that can affect more than 1 component

 What is the difference between Application state and Component state? When would be a good time to use one over the other?

app state - store
component state - only relevant to that particular component, state doesn't affect other parts of the app, useful for temporary storage of variables that are sent on to the store

 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

 intercept actions before they hit the reducer and modify them or install gatekeeping functions