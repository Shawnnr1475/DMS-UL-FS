import React from 'react'

const Logings = ({logs}) => {
  return (
    <div>{logs?logs.map((element)=>{
        return <p key={element}>{element}</p>
    }):""}</div>
  )
}

export default Logings