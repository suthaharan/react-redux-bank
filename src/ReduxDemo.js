import React from 'react';
import { createStore } from 'redux';

const ReduxDemo = () => {
    // Step 2 - Reducer -> state and action
    const reducer = (state, action) => {
        if(action.type === "Fetch"){
            return action.payload;
        }
        // state is necessary. pass default state if there is null or undefined values
        return state; 
    }
    // Step 1 - Store -> reducer and state
    const store = createStore(reducer, "Basket");
    // Step 3 - Subscribe (callback) to the store to get state
    store.subscribe(() => {
        console.log("Store state is now -> " + store.getState())
    });
    // Step 4 - Dispatch the action
    store.dispatch({type: "Fetch", payload: "Fruits"});

  return (<div>
      Redux Demo
      <ul>
          <li>Step 1 - Store -> reducer and state</li>
          <li>Step 2 - Reducer -> state and action</li>
          <li>Step 3 - Subscribe (callback) to the store to get state</li>
          <li>Step 4 - Dispatch the action</li>
      </ul>
  </div>);
};
export default ReduxDemo;