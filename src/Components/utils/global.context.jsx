import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  theme: "light", 
  dentists: [],
  // favs: JSON.parse(localStorage.getItem("favs")) || []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      // console.log("Cambie de tema");
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      console.log(action.payload);
      return { ...state, dentists: action.payload };
    // case 'ADD_FAV':
    //   const updatedFavs = [...state.favs, action.payload];
    //   localStorage.setItem("favs", JSON.stringify(updatedFavs));
    //   return { ...state, favs: updatedFavs}
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  
  // const [theme, setTheme] = useState();
  // const [list, setList] = useState([]);
  const [favs, setFavs] = useState(lsFavs); 

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      // setList(res.data);
      dispatch({type: "SET_DENTISTS", payload: res.data})
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: state.theme === 'light' ? 'dark' : 'light',
    })
  }

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistState = () => {
  return useContext(ContextGlobal);
};