"use client"
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("punjab news today");
  const [searchClick, setSearchClick] = useState(false);
 
  return (
    <SearchContext.Provider value={{ search, setSearch, searchClick, setSearchClick}}>
      {children}
    </SearchContext.Provider>
  );
};
