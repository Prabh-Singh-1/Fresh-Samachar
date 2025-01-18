"use client"
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [allnews, setAllnews] = useState([]);
  return (
    <SearchContext.Provider value={{ search, setSearch, allnews, setAllnews }}>
      {children}
    </SearchContext.Provider>
  );
};
