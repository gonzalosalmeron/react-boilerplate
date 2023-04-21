import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center gap-6 pt-40'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='w-16 animate-bounce' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='w-16 animate-spin' alt='React logo' />
        </a>
      </div>
      <h1 className='pt-4 text-center text-2xl font-semibold'>Vite + React</h1>
      <div className='justify-cente0 mx-auto flex flex-col items-center pt-10'>
        <button
          className='transform rounded-lg bg-gray-200/80 px-3 py-1.5 transition duration-150 hover:scale-105'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className='pt-2'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className='text-sm'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
