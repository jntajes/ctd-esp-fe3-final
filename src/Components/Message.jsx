import React from 'react'

const Message = ({customer}) => {
  return (
    <>
        <h4>
            Gracias {customer.name}, te contactaremos cuando antes vía mail
        </h4>
    </>
  )
}

export default Message