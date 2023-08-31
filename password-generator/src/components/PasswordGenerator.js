function PasswordGenerator() {
  return (
    <div className="w-2/4 password-generator bg-black text-white p-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">@dmin123</span>
        <button
          type="button"
          className="px-2 py-1 rounded bg-teal-700 text-sm"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between font-semibold mt-4">
          <span>Character Length</span>
          <span>10</span>
        </div>
        <div className="flex mt-4">
          <input type="range" name="" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <input type="checkbox" name="uppercase" id="uppercase" />&nbsp;
          <label htmlFor="uppercase">Include Uppercase Letter</label>
        </div>
        <div>
          <input type="checkbox" name="lowercase" id="lowercase" />&nbsp;
          <label htmlFor="lowercase">Include Lowercase Letter</label>
        </div>
        <div>
          <input type="checkbox" name="numbers" id="numbers" />&nbsp;
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="symbols" id="symbols" />&nbsp;
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-sm">
        <span>Strength:</span>
        <span className="font-semibold">Poor</span>
      </div>
      <button
        type="button"
        className="w-full p-4 uppercase rounded bg-teal-700 mt-2 font-semibold"
      >
        Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
