"use client"
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("punjab news today");
 
  return (
    <SearchContext.Provider value={{ search, setSearch}}>
      {children}
    </SearchContext.Provider>
  );
};
