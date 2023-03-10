import React, { useState } from 'react'
import '../styles/App.css'
const App = () => {
  const [btn1Text, setBtn1Text] = useState('OFF')
  const [btn2Text, setBtn2Text] = useState('ON')
  const handleClick = () => {
    btn1Text === 'OFF' ? setBtn1Text('ON') : setBtn1Text('OFF')
    btn2Text === 'OFF' ? setBtn2Text('ON') : setBtn2Text('OFF')
  }
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {btn1Text}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {btn2Text}
      </button>
    </div>
  )
}

export default App
