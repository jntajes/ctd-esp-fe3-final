import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const { state } = useContext(ContextGlobal);
  
  const url =`https://jsonplaceholder.typicode.com/users/${params.id}`;
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  useEffect(() => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={`${state.theme}`} style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "0 10%"}}>
        <img
          src="../../public/images/doctor.jpg"
          alt="doctor"
          // className={CardStyles.card_img}
        />
        <div>
          <h1>Detail Dentist {dentist.id} </h1>
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          <h3>Nombre del dentista: {dentist.name}</h3>
          <h3>Email: {dentist.email}</h3>
          <h3>Telefono: {dentist.phone}</h3>
          <h3>Sitio web: {dentist.website}</h3>
        </div>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail