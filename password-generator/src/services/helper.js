export function createPassWord(passwordFormat) {
  let password = "", charSet = "", error = null

  if(passwordFormat.includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(passwordFormat.includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz"
  }

  if(passwordFormat.includeNumbers) {
    charSet += "0123456789"
  }

  if(passwordFormat.includeSymbols) {
    charSet += "!@#$%^&*"
  }

  if(!charSet) {
    error = 'Please select at least one checkbox'
  } else {
    for(let i = 0; i < passwordFormat.passwordLength; i++ ) {
      const randomIndex = Math.floor(Math.random() * charSet.length)
      password += charSet.charAt(randomIndex)
    }
  }
  
  return {password, error}
}