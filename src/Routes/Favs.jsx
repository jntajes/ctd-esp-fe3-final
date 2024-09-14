import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={`home ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  )
};

export default Favs;
