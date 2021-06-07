function createStore() {
  /* The redux store should do the following:
      The state
      Get the state
      Listen for changes
      Update the state.

  */
 let state
 let listeners = []

 const getState = () => state

 const subscribe = (listner) => {
  listeners.push(listner)
 }

 return {
   getState,
   subscribe
 };
}
