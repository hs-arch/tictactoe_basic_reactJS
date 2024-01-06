import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reusable_Cards from './components/Reusable_Cards'
import Game from './components/Game'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)
  const passingProp = ["Hamid","Abid","Khalid","Rashid", "Kahkashaan"];

  const randomizeName = Math.floor(Math.random() * passingProp.length)

  return (
    <>
      <Logo />
      <Game />
      {/* <Reusable_Cards myname={passingProp[randomizeName]}/> */}
    </>
  )
}

export default App
