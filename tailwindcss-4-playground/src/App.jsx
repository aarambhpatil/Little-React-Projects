import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row'>
    <div className='w-100 h-100 bg-linear-90 from-violet-500 via-indigo-500 to-blue-500'>
    </div>
    <div className='w-100 h-100 bg-linear-90 from-blue-500 via-green-500 to-yellow-500'>
    </div>
    <div className='w-100 h-100 bg-linear-90 from-yellow-500 via-orange-500 to-red-500'>
    </div>
    </div>
  )
}

export default App
