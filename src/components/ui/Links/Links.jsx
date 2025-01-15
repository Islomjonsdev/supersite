import React from 'react';
import "./Links.scss"
import { Link } from 'react-router-dom'

const Links = ({title, ...props}) => {
  return (
    <div {...props}>
        <Link className='links'>{title}</Link>
    </div>
  )
}

export default Links