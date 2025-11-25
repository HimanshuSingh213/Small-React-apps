import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [textRange, setTextRange] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("g73trgfg8w7yy");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*|";

    for (let i = 0; i < textRange; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [textRange, numbersAllowed, charAllowed, setPassword])

  useEffect(()=> {
    passGenerator();
  }, [textRange, charAllowed, numbersAllowed, passGenerator])

  // useRef hook
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=> {
    
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen p-4 bg-gray-950'>
        {/* <h1 className='font-medium text-2xl bg-gray-800 px-4 py-2 rounded-2xl text-white w-max'>Tailwind v4 is Working </h1> */}
        <div className='bg-gray-800 p-5 rounded-2xl w-lg'>
          <div className='w-full h-11 rounded-xl flex items-center overflow-hidden bg-white'>
            <div
            ref={passwordRef}
            className='px-2 py-2 text-blue-400 font-medium text-base flex justify-start w-85/100 items-center h-full'>{password}</div>
            <div onClick={copyPasswordToClipboard}
             className='flex items-center justify-center text-white text-sm font-medium bg-blue-500 w-16/100 h-full cursor-pointer hover:bg-blue-600'>COPY</div>
          </div>
          <div className='mt-4 flex h-6 items-center gap-4 w-full text-white'>
            <div className='flex items-center gap-2 w-max h-full'>
              <input type="range" name="text-length" id="" min={6} max={100} value={textRange}
              onChange={(e) => {
                setTextRange(e.target.value)
              }}
              className='accent-blue-600 cursor-pointer'/>
              <p>Length({textRange})</p>
            </div>
            <div className='flex items-center gap-2 w-max h-full'>
              <input type="checkbox" id="numbers" className='accent-blue-600 cursor-pointer'
              defaultChecked={numbersAllowed}
              onChange={() =>{
                setNumbersAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className='flex items-center gap-2 w-max h-full'>
              <input type="checkbox" id="characters" className='accent-blue-600 cursor-pointer'
              defaultChecked={charAllowed}
              onChange={() =>{
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
