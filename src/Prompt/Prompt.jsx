import React from 'react'

const Prompt = ({onClickPromptYes, onClickPromptNo}) => {
  return (
    <div className='prompt'>
        <button onClick={onClickPromptNo}>No</button>
        <button onClick={onClickPromptYes}>Yes</button>
    </div>
  )
}

export default Prompt