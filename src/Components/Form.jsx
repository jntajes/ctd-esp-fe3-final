import Message from "./Message";
import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: ""
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  // const handleChangeName = (event) => {
  //   setCustomer({ ...customer, name: event.target.value});
  // }

  // const handleChangeEmail = (event) => {
  //   setCustomer({ ...customer, email: event.target.value});
  // }

  const handleChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value});
    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailFormatRegex = /\S+@\S+\.\S+/;
    // console.log(customer);
    
    if (customer.name.length < 5 || !emailFormatRegex.test(customer.email)) {
      // console.log("algo esta mal");
      setError(true);
    } else {
      setShow(true);
      setError(false);
      console.log("Name: " + customer.name + "\nEmail: " + customer.email);
    }
  };

  return (
    <>
      {show ? (
        <Message customer={customer} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input 
              type="text"
              name = "name"
              value={customer.name}
              onChange={handleChange}
              placeholder="Nombre completo"
            />
            <label>Email:</label>
            <input 
              type="text"
              name = "email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <button>Enviar</button>
          </form>
        </>
      )};

      {error ? (
        <h4 style={{color: "red"}}>
          Por favor verifique su información nuevamente
        </h4>
      ) : null}
    </>
  );
};

export default Form;