import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Setup base project with vitejs
        </h1>
      </div>
    </div>
  )
}

export default App
