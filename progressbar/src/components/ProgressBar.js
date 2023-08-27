import React, {useEffect, useState} from 'react'
import { MIN, MAX } from '../constants'

const ProgressBar = ({value = 0, onComplete = () => {}}) => {
  const [percent, setPercent] = useState(value)

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)))

    if(value >= 100) {
      onComplete();
    }
  }, [value])

  return (
    <div className='w-full border border-blue-800 rounded-full overflow-hidden text-center'>
      <span
        style={{
          position: 'absolute',
          color: percent >= 49 ? 'white' : 'black'
        }}
      >
        {percent}%
      </span>
      <div className='bg-green-600' style={{width: `${percent}%`}}>&nbsp;</div>
    </div>
  )
}

export default ProgressBar
