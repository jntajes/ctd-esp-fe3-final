import React from 'react'
import Card from '../Components/Card'

const dentist = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
};


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Card dentist={dentist} />
      </div>
    </main>
  )
}

export default Home