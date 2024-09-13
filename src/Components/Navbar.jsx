import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import ButtonStyles from "./Modules/Navbar.module.scss"; // Importar correctamente los estilos

const Navbar = () => {
  const { toggleTheme, state } = useContext(ContextGlobal);

  return (
    <nav>
      {/* Agregamos los links correspondientes */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>
      {/* Implementamos la lógica para cambiar de tema con el checkbox */}
      <div style={{ marginRight: "10rem" }}>
        <input
          type="checkbox"
          id="themeSwitch"
          onClick={toggleTheme}
          name="theme-switch"
          className={ButtonStyles["theme-switch__input"]} // Acceder a la clase usando notación de corchetes
        />
        <label
          htmlFor="themeSwitch"
          className={ButtonStyles["theme-switch__label"]} // Acceder a la clase usando notación de corchetes
        >
          <span></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
