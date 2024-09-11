import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Card = ({dentist}) => {
  const { name, username, id } = dentist;
  const navigate = useNavigate();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push({dentist});
    localStorage.setItem('favs', JSON.stringify(favs));
    alert(`${name} añadido a favoritos`);
  }

  const handleClick = ()=>{
    console.log(id);
    navigate(`/dentist/${id}`); 
  }
  // console.log(dentist);
  // console.log(dentist.username);
  
  return (
    <div className="card" onClick={handleClick}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <h4>ID: {id}</h4>
        <h4>NAME: {name}</h4>
        <h4>USERNAME: {username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;