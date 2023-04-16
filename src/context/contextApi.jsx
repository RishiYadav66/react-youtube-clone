import { createContext, useState, useEffect } from "react";

import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setloading] = useState(false);
  const [searchResult, setsearchResult] = useState([]);
  const [selectCategories, setselectCategories] = useState("New");
  const [mobileMenu, setmobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setloading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setsearchResult(contents);
      setloading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setloading,
        selectCategories,
        setselectCategories,
        searchResult,
        mobileMenu,
        setmobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
