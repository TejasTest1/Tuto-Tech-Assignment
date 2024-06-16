import React from 'react'
import '../Styles/HeroComponent.css';


const HeroComponent = () => {

  return (
    <div className='heroComponent'>

      <div className="hero">
        {
          Array.from({ length: 2 }).map((currElem, index) => {
            return <div className='box' key={index}>{currElem}</div>
          })
        }
      </div>

      <div className="hero">
        {
          ['Our', 'Latest', 'Products'].map((currElem, index) => {
            return <p key={index}>{currElem}</p>
          })
        }
        <button>View</button>
      </div>

      <div className="hero">
        {
          Array.from({ length: 2 }).map((currElem, index) => {
            return <div className='box' key={index}>{currElem}</div>
          })
        }
      </div>

      <div className="hero">
        {
          Array.from({ length: 2 }).map((currElem, index) => {
            return <div className='box' key={index}>{currElem}</div>
          })
        }
      </div>
    </div>

  )
}

export default HeroComponent
