import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='poesia'>
        <h1>Aurora</h1>
        <p> É lindo o pôr do sol, o pano carmesim que se estende sobre o céu, o entardecer de um dia grandioso.
Mas é nada comparado à ti, quando te olho sua beleza deslumbrante me faz esquecer que estou longe.
A distância entre o céu e o mar é a minha alegria quando te vejo, em feixes de luz a vejo dançar, azul, o vermelho e o verde se misturar, como amo ficar perdido te olhando, ainda acho um jeito de aparecer e você me notar.
</p>
      </div>
    </>
  )
}

export default App
