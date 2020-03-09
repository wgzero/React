import React, { useState } from 'react';

function App() {

  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={() =>setNum(num+1)} >点击</button>
    </div>
  )
}

export default App;
