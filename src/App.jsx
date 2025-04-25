import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackToTop from './Components/BacktoTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-300 flex flex-col items-center justify-start min-h-screen ">
    <h1 className='text-3xl font-bold mb-4 mt-4'>
      Back to Top
    </h1>
    <p className='mb-4 py-4 px-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat exercitationem, perspiciatis iusto voluptatem dolores maiores ex vero fugit? Facilis veniam exercitationem, eaque necessitatibus ab odit ipsa deleniti non perspiciatis!</p>
    <p className='mb-4 py-4 px-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias, numquam, unde incidunt eveniet reiciendis distinctio cumque alias ea voluptatum nemo magni porro, accusamus dolore tenetur repellat itaque nobis cupiditate.</p>
    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
    <p className='mb-4 py-4 px-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat exercitationem, perspiciatis iusto voluptatem dolores maiores ex vero fugit? Facilis veniam exercitationem, eaque necessitatibus ab odit ipsa deleniti non perspiciatis!</p>

    <card className="bg-white-100 p-4 shadow rounded mb-4 mt-4 w-1/2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi eveniet sint vel placeat omnis magni possimus expedita impedit dolorem! Libero id provident at recusandae rem tempore inventore. Omnis, aperiam.</p>
    </card>
      <BackToTop />
    </div>
  )
}

export default App
