import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal, useDentistState } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  
  return (
    <main className={`home ${state.theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map((dentist) => (<Card key={dentist.id} dentist={dentist}/>))}
      </div>
    </main>
  )
}

export default Home;