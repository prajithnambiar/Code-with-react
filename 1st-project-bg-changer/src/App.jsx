import { useState } from 'react'



function App() {
  const [color, setColor] = useState("green");

  const changeColor = (colour) => {
    setColor(colour);
  }

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-2 py-3 rounded-2xl'>
          <button onClick={()=> changeColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>
          Red
          </button>
          <button onClick={()=> changeColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>
            blue
          </button>
          <button onClick={()=> changeColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}>
            black
          </button>

        </div>

      </div>

    </div>

    
  )
}

export default App
