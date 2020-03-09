import React, { useState, useEffect } from 'react';

function App() {

  const [num, setNum] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      document.title = 'hello zero'
    }, 3000)
  })


  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={() =>setNum(num+1)} >点击</button>
    </div>
  )
}

export default App;
