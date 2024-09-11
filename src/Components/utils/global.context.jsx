import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

// export const initialState = {theme: "", data: []};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState();
  const [favs, setFavs] = useState(lsFavs); 
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      // console.log(res.data.results);
      setList(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{theme, setTheme, favs, setFavs, list}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistState = () => {
  return useContext(ContextGlobal);
};