import React, { useState } from 'react'

import "./fizzbuzz.style.css"


const FizzBuzz = () => {
    const [count, setCount] = useState(0)

    const onMinusClick = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const onPlusClick = () => {
        if (count < 15) {
            setCount(count + 1)
        }
    }
    

    const fizzBuzz = () => {
        if (count % 3 === 0 && count % 5 === 0) {
            return <p>FIZZBUZZ</p>
        } else if (count % 3 === 0) {
            return <p>FIZZ</p>
        } else if (count % 5 === 0) {
            return <p>BUZZ</p>
            
        }
    };


  return (
      <div  className='container'>
          <div className='main'>
          
          <button className="box-right" onClick={onMinusClick}>
              -
          </button  >

          <p>
              {count}
          </p>

          <button className="box-left" onClick={onPlusClick}>
              +
          </button>
          </div>

          <div >
              {fizzBuzz()}
          </div>


    </div>
  )
}

export default FizzBuzz