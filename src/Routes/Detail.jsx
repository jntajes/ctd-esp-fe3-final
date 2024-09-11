import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();
  console.log(params);
  
  const url =`https://jsonplaceholder.typicode.com/users/${params.id}`;
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <h3>Nombre del dentista: {dentist.name}</h3>
      <h3>Email: {dentist.email}</h3>
      <h3>Telefono: {dentist.phone}</h3>
      <h3>Sitio web: {dentist.website}</h3>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail