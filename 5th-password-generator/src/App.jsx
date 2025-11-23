import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)str +="0123456789";
    if(characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char);
     
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(()=>{ passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator]);
  const copyPasToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password])

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-5 my-9 text-orange-500 bg-gray-800'>
<div>
    <h1 className='text-white text-center my-5 '>Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input ref={passwordRef} className='outline-hidden w-full border-5 py-3 px-3' type="text" value={password} placeholder='Password' readOnly />
    <button onClick={copyPasToClipboard} className='outline-none bg-amber-700 text-white px-3 py-0.5 shrink-0 mx-3 rounded-xl'>
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)}/>
      <label> Length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numberAllowed} onChange={()=> setNumberAllowed((prev) => !prev)} />
      <label htmlFor="numberInput">Numbers</label>
    </div>
        <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={characterAllowed} onChange={()=> setCharacterAllowed((prev) => !prev)} />
      <label htmlFor="charInput">Characters</label>
    </div>

  </div>

</div>


</div>
    </>
  )
}

export default App
