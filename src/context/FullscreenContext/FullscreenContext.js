import { createContext, useState, useContext } from "react";

// Create Context
const FullscreenContext = createContext();

// Create Provider Component
export function FullscreenProvider({ children }) {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <FullscreenContext.Provider value={{ fullscreenImage, setFullscreenImage }}>
      {children}
    </FullscreenContext.Provider>
  );
}

// Custom Hook
export function useFullscreen() {
  return useContext(FullscreenContext);
}

// Export Context
export { FullscreenContext };
