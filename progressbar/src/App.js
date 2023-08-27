import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

var valInterval = null

function App() {
  const [value, setValue] = useState(0)
  const [complete, setComplete] = useState(false)

  function start() {
    valInterval = setInterval(() => {
      setValue(val => val+1)
    }, 100)
  }

  useEffect(() => {
    start()

    return () => clearInterval(valInterval)
  }, [])

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col items-center">
        <div>Progress Bar</div>
        <ProgressBar
          value={value}
          onComplete={() => {
            setComplete(true)
          }}
        />
        <div>{complete ? 'Completed!': 'Loading...'}</div>
      </div>
    </div>
  )
}

export default App;
