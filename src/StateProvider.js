//setup data layer
//need this to track the basket

import React, { createContext,useContext,useReducer } from 'react';

//This is data layer
export const StateContext = createContext();

//Build a provider
//initialState is how the data layer looks initially
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext);


