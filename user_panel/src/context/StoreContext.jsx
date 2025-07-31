import { createContext, useState } from 'react';

// 1️⃣ Context তৈরি করো
export const StoreContext = createContext();

// 2️⃣ Context Provider তৈরি করো
export const StoreProvider = ({ children }) => {
  // ✅ Global state (example: user info, theme, language, etc.)
  const [user, setUser] = useState(null);

  // ✅ যেকোনো state/ফাংশন context value হিসেবে পাঠানো যাবে
  const contextValue = {
    user,
    setUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
