import { useState } from "react";

function App() {
  const [order, setOrder] = useState([])

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  function activateCell (index) {
    if(!order.includes(index)) {
      const newOrder = [...order, index]
      setOrder(newOrder)
      if(newOrder.length === config.flat().filter(Boolean).length) {
        deactivateCell()
      }
    }
  }

  function deactivateCell () {
    const timer = setInterval(() => {
      setOrder(function(originalOrder) {
        const newOrder = originalOrder.slice()
        newOrder.pop()
        
        if(newOrder.length === 0) {
          clearInterval(timer)
        }

        return newOrder
      })
    }, 300)
  }

  return (
    <div className="App w-4/12 p-10">
      <div className="grid grid-cols-3 gap-2">
        {config.flat().map((value, index) => (
          value ? <Cell key={index} filled={order.includes(index)} onClick={() => activateCell(index)} /> : <span key={index}></span>
        ))}
      </div>
    </div>
  );
}

export default App;

function Cell ({filled, onClick}) {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 border-2 border-blue-200 ${filled ? 'bg-green-700' : ''}`}>
    </button>
  )
}
