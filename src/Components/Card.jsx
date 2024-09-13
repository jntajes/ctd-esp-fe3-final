import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDentistState } from "./utils/global.context";
import CardStyles from "./Modules/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const navigate = useNavigate();
  const { setFavs } = useDentistState();
  const [isFavorite, setIsFavorite] = useState(false);

  const addFav = () => {
    setIsFavorite(!isFavorite);
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const handleClick = () => {
    console.log(id);
    navigate(`/dentist/${id}`);
  };
  // console.log(dentist);
  // console.log(dentist.username);

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.card_fav}>
        <p style={{ visibility: "visible" }}>{id}</p>
        <button
          onClick={addFav}
          className={`${CardStyles.favButton} ${
            isFavorite ? CardStyles.favButtonActive : ""
          }`}
        >
          <FontAwesomeIcon icon={faStar} />
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
