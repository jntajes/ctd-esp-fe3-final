import React from 'react'
import Card from '../Components/Card'

const dentist1 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
};
const dentist2 = {
  id: 2,
  name: "Leanne Graham",
  username: "Bret",
};
const dentist3 = {
  id: 3,
  name: "Leanne Graham",
  username: "Bret",
};

const dentistasArr = [dentist1, dentist2, dentist3];
// console.log(dentistasArr);


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {/* <Card dentist={dentistas} /> */}
        {dentistasArr.map((dentista) => (<Card key={dentista.id} dentist={dentista}/>))};
      </div>
    </main>
  )
}

export default Home