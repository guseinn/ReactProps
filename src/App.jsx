import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Wine } from './Wine';

function App() {
  return (
    <>
     <Wine title={'Araq haramdir'} description={'Cox pis'} rating={72}/>
    </>
  )
}

export default App;