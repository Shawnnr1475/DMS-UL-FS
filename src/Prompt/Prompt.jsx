import React from 'react'

const Prompt = ({onClickPromptYes}) => {
  return (
    <div className='prompt'>
        <button>No</button>
        <button onClick={onClickPromptYes}>Yes</button>
    </div>
  )
}

export default Prompt