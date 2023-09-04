import { useEffect, useState } from "react"

import PasswordStrength from "./PasswordStrength"
import { createPassWord } from "../services/helper"

function PasswordGenerator() {
  const [passwordFormat, setPasswordFormat] = useState({
    password: null,
    passwordLength: 4,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
    isCopy: false
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const {name, checked, type, value} = e.target

    if(type === 'checkbox') {
      setPasswordFormat({...passwordFormat, [name]: checked})
    } else {
      setPasswordFormat({...passwordFormat, [name]: value})
    }
  }

  const generatePassWord = () => {
    const {password, error} = createPassWord(passwordFormat)
    setPasswordFormat({...passwordFormat, password: password, isCopy: false})
    setError(error)
  }

  const copyPassWord = () => {
    if(passwordFormat?.password) {
      navigator.clipboard.writeText(passwordFormat.password)
      setPasswordFormat({...passwordFormat, isCopy: true})

      setTimeout(() => {
        setPasswordFormat({...passwordFormat, isCopy: false})
      }, 1000)
    }
  }

  useEffect(() => {
    console.log(passwordFormat)
  }, [passwordFormat])

  return (
    <div className="w-2/4 password-generator bg-black text-white p-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{passwordFormat?.password}</span>
        <button
          type="button"
          className="px-2 py-1 rounded bg-teal-700 text-sm"
          onClick={() => copyPassWord()}
        >
          {passwordFormat?.isCopy ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between font-semibold mt-4">
          <span>Character Length</span>
          <span>{passwordFormat?.passwordLength}</span>
        </div>
        <div className="flex mt-4">
          <input
            type="range"
            name="passwordLength"
            min={1}
            max={20}
            value={passwordFormat?.passwordLength}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <input
            type="checkbox"
            name="includeUppercase"
            id="includeUppercase"
            onChange={handleChange}
            checked={passwordFormat?.includeUppercase}
          />&nbsp;
          <label htmlFor="includeUppercase">Include Uppercase Letter</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="includeLowercase"
            id="includeLowercase"
            onChange={handleChange}
            checked={passwordFormat?.includeLowercase}
          />&nbsp;
          <label htmlFor="includeLowercase">Include Lowercase Letter</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="includeNumbers"
            id="includeNumbers"
            onChange={handleChange}
            checked={passwordFormat?.includeNumbers}
          />&nbsp;
          <label htmlFor="includeNumbers">Include Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="includeSymbols"
            id="includeSymbols"
            onChange={handleChange}
            checked={passwordFormat?.includeSymbols}
          />&nbsp;
          <label htmlFor="includeSymbols">Include Symbols</label>
        </div>
      </div>
      <PasswordStrength passwordFormat={passwordFormat} />
      <div className="text-red-700 text-sm">{error}</div>
      <button
        type="button"
        className="w-full p-4 uppercase rounded bg-teal-700 mt-2 font-semibold"
        onClick={() => generatePassWord()}
      >
        Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
