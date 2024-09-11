import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useDentistState();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  )
};

export default Favs;
