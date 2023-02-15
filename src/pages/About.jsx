import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaMailBulk } from 'react-icons/fa'

function About() {
  return (
    <div className="hero">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Github Finder</h1>
                <div className="mb-5 mt-5">
                    <p>This project was completly cloned by AmirSa12</p>
                    <p>A member of SorrowBros Team</p>
                </div>
                <div className='flex flex-row'>
                    <a target='_blank' href='https://instagram.com/amirhossein.sa12' rel='noreferrer' className="tooltip tooltip-bottom btn btn-secondary ml-5 flex" data-tip="amirhosseinpr184@gmail.com">
                        <FaMailBulk className='mr-2'/>
                        Email
                    </a>
                    <a target='_blank' href='https://instagram.com/amirhossein.sa12' rel='noreferrer' className="tooltip tooltip-bottom btn btn-accent ml-5 flex" data-tip="@amirhossein.sa12">
                        <FaInstagram className='mr-2'/>
                        Instagram
                    </a>
                    <a target='_blank' href='https://discord.com/users/' rel='noreferrer' className="tooltip tooltip-bottom btn btn-primary ml-5 flex" data-tip="Sarhang#9669">
                        <FaDiscord className='mr-2'/>
                        Discord
                    </a>
                </div>
            </div>
         </div>
    </div>
  )
}

export default About
