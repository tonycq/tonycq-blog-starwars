import React, { createContext, useReducer } from 'react';

const initialState = {
  people: [
    { uid: '1', name: 'Luke Skywalker', url: 'https://www.swapi.tech/api/people/1' },
    
  ],
  planets: [
    { uid: '1', name: 'Tatooine', url: 'https://www.swapi.tech/api/planets/1' },
   
  ],
  vehicles: [
    { uid: '1', name: 'Snowspeeder', url: 'https://www.swapi.tech/api/vehicles/1' },
    
  ],
  favorites: []
};

const AppContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const exists = state.favorites.find(item => item.uid === action.payload.uid);
      return {
        ...state,
        favorites: exists ? state.favorites.filter(item => item.uid !== action.payload.uid) : [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleFavorite = (item) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: item });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
