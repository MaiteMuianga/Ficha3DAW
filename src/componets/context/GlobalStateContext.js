// GlobalStateContext.js
import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState(/* Inicialize o estado global aqui */);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
