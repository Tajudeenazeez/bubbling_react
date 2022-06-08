import React from 'react'

function Hero({heroName}) {
  if (heroName === "Joker"){
      throw new Error("Joker is not a Hero")
  }
    return (
    <div>
        {heroName} is an hero
    </div>
  )
}

export default Hero