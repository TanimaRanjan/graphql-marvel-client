import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (

    <div className='not_found'>
    <div className='not_found_title'>
        <h2 >401!  <Link to ='/'>Go Home</Link></h2>
    </div>
    <div className='not_found_img' >
        <img className='error__image' 
        width= "50%"  height= "50%"
        alt = 'Error'
        src='/images/error.png' />
    </div>
    </div>
)

export default NotFoundPage