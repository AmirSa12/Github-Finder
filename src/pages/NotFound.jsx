import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p className="py-6">Error 404 - Page Not Found</p>
                <Link to='/' className="btn btn-outline btn-info">
                    <FaHome className='mr-2'/>
                    Home Page
                </Link>
            </div>
         </div>
    </div>
  )
}

export default NotFound