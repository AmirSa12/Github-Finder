import React from 'react'
import spinner from './assets/Iphone-spinner-2.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={spinner} alt='Loading...' />
    </div>
  )
}

export default Spinner