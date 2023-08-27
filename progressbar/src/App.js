import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

var valInterval = null

function App() {
  const [value, setValue] = useState(0)
  const [complete, setComplete] = useState(false)

  function start() {
    setComplete(false)
    pause()
    valInterval = setInterval(() => {
      setValue(val => val+1)
    }, 100)
  }

  function pause() {
    clearInterval(valInterval)
  }

  function restart() {
    setValue(0)
    start()
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
      <div className="flex flex-row items-center">
        <button onClick={() => {start()}} className="rounded-full px-4 py-1 bg-cyan-400">Start</button>
        <button onClick={() => pause()} className="rounded-full px-4 py-1 bg-cyan-400 ml-2">
          Pause
        </button>
        <button onClick={() => restart()} className="rounded-full px-4 py-1 bg-cyan-400 ml-2">Restart</button>
      </div>
    </div>
  )
}

export default App;
