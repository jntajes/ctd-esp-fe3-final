import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {toggleTheme, state} = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar