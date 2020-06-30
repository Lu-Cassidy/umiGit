import React, { useEffect, useReducer, createContext } from 'react';
import { getDatas } from '@/services/index';
export const Context = createContext({});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'getData':
      // console.log(action);
      getDatas().then(res => {
        console.log({ names: [...state.names, ...res.title] });
        return { names: [...state.names, ...res.title] };
      });
    //   const { payload } = action;
    case 'update':
      const { payload } = action;
      return { names: [...state.names, ...payload] };
    default:
      return { ...state };
  }
};
