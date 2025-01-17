import React from 'react';
import "./Our.scss"

const Our = ({title, ...props}) => {
  return (
    <div className='our_cus' {...props}>
        <h2>{title}</h2>
    </div>
  )
}

export default Our