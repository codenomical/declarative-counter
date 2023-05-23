import React, { useState } from 'react'

// should render the number '1' twice. Once in the <h1> tag and the other in the <h4> tag. 
function App() {
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
      <div>
          <h1>{counter}</h1>
          <h4>{counter}</h4>
      </div>
    )
}

export default App;

// Assignment continues with having us call changeCounter(2) in the developer tool to read the messages generated and to see the number change to 2 on both tags.