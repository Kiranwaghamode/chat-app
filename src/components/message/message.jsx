import React from 'react'
import './message.css'

export const Message = ({user, message, classs}) => {
    if(user){
        return (
         <div className={`msg ${classs}`}>
        {`${user}: ${message}`}
        </div>
        )
    }
    else{
      

  return (
    <>
     <div className={`msg ${classs}`}>
        {`You: ${message}`}
     </div>
    
    </>
  )
}
}
