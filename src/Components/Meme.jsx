import React from 'react'
import memesData from './memesData'

const Meme = () => {

  const [memeImage, setMemeImage] = React.useState("") 

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <div className='form-taker'>
        <div>
            <input className='input1' type='text' placeholder='Top text'></input>
            <input className='input2' type='text' placeholder='Bottom text'></input>
            <br />
            <button className='gen-btn' onClick={getMemeImage}>Get a new meme image<i class="fa-solid fa-image"></i></button>
        </div>
        <img className='btm-img' src={memeImage}/>
    </div>
  )
}

export default Meme