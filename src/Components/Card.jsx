import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const navigate = useNavigate();
  const { toggleFavs, state } = useContext(ContextGlobal);

  const handleClick = () => {
    console.log(id);
    navigate(`/dentist/${id}`);
  };

  return (
    <div className="card">
      <div onClick={handleClick}>
        {/* <img src="../../public/images/doctor.jpg" alt="doctor-perfil" /> */}
        <h4>{name}</h4>
        <h4>{username}</h4>
      </div>
      <button onClick={() => toggleFavs(dentist)} className="favButton">
        {state.favs.some(fav => fav.id === dentist.id) ? "❤️" : "🖤"}
      </button>
    </div>
  );
};

export default Card;