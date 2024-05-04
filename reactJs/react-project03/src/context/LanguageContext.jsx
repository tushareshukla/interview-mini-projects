//language context is used to store the language of the application

import React, { createContext, useState } from "react";
//create a context
export const LanguageContext = createContext();

//create a provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default language is english
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
