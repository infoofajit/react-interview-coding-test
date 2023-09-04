function PasswordStrength ({passwordFormat}) {
  const getPasswordStrength = () => {
    const password = passwordFormat?.password?.length

    if(password < 1) {
      return ""
    }
    else if(password <=4) {
      return "Poor"
    } else if(password <=8) {
      return "Medium"
    } else if(password <=20) {
      return "Strong"
    }
  }

  const strength = getPasswordStrength()
  if(!strength) return <></>

  return (
    <div className="flex items-center justify-between mt-4 text-sm">
      <span>Strength:</span>
      <span className="font-semibold">{strength}</span>
    </div>
  )
}

export default PasswordStrength;
