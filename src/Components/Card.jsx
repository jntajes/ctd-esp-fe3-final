import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import CardStyles from './Modules/Card.module.css';

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const navigate = useNavigate();
  const { toggleFavs, state } = useContext(ContextGlobal);

  const handleClick = () => {
    console.log(id);
    navigate(`/dentist/${id}`);
  };

//   return (
//     <div className="card">
//       <div onClick={handleClick}>
//         <img src="../../public/images/doctor.jpg" alt="doctor-perfil" />
//         <h4>{name}</h4>
//         <h4>{username}</h4>
//       </div>
//       <button onClick={() => toggleFavs(dentist)} className="favButton">
//         {state.favs.some(fav => fav.id === dentist.id) ? "❤️" : "🖤"}
//       </button>
//     </div>
//   );
// };

return (
  <div className={CardStyles.card}>
    <div className={CardStyles.card_fav}>
      <p style={{ visibility: "visible" }}>{id}</p>
      <button onClick={() => toggleFavs(dentist)} className="favButton">
        {state.favs.some(fav => fav.id === dentist.id) ? "❤️" : "🖤"}
      </button>
    </div>

    <div onClick={handleClick} className={CardStyles.card_column}>
      {/* En cada card deberan mostrar en name - username y el id */}

      <img
        src="../../public/images/doctor.jpg"
        alt="doctor"
        className={CardStyles.card_img}
      />
      <p>{name}</p>
      <p>{username}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  </div>
);
};

export default Card;