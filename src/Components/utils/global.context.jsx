import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  theme: "light", 
  dentists: [],
  favs: lsFavs,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGEL_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'TOGGEL_FAVS':
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  // const [favs, setFavs] = useState(lsFavs); 

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type: "SET_DENTISTS", payload: res.data})
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
  console.log(state.favs);

  const toggleFavs = (dentist) => {
    const isFav = state.favs.some(fav => fav.id === dentist.id);
    const updatedFavs = isFav ? state.favs.filter(fav => fav.id !== dentist.id) : [...state.favs, dentist];
    dispatch({
      type: 'TOGGEL_FAVS',
      payload: updatedFavs,
    })
  }

  const toggleTheme = () => {
    dispatch({
      type: 'TOGGEL_THEME',
      payload: state.theme === 'light' ? 'dark' : 'light',
    })
  }

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme, toggleFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistState = () => {
  return useContext(ContextGlobal);
};