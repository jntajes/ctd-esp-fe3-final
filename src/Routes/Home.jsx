import React from 'react'
import Card from '../Components/Card'
import { useDentistState } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { list } = useDentistState();
  console.log(list);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {list.map((dentist) => (<Card key={dentist.id} dentist={dentist}/>))}
      </div>
    </main>
  )
}

export default Home;