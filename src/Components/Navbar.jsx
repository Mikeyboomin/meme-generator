import React from 'react'
import troll from '../images/troll-face.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <img className="togo" src={troll} />
            <a className="logo-txt">Meme Generator</a>
            <p className='Brand'>By Michael Ogar</p>
        </nav>
    </div>
  )
}

export default Navbar