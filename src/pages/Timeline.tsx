import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import Separator from "../components/Separator"
import { Tuite } from "../components/Tuite"

import './Timeline.css'

export function Timeline() {

const [newTuite, setNewTuite] = useState('');
const [tuites, setTuites] = useState(['Tuite 1', 'Tuite 2', 'Tuite 3']);


function createNewTuite(event: FormEvent) {
  event.preventDefault()

  setTuites([newTuite, ...tuites])
  setNewTuite('')
}

function handleHotkeySubmit(event: KeyboardEvent) {
  if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    setTuites([newTuite, ...tuites])
    setNewTuite('') 
  }
}

return (
  <main className='timeline'>
  <Header title='Home'/>
<form onSubmit={createNewTuite} className='new-tuiter-form'>
  <label htmlFor='tuite'>
    <img src='https://github.com/eduardo-r-machado.png' alt='Icon perfi Eduardo Machado' />
    <textarea id='tuite'
      value={newTuite} 

      onKeyDown={handleHotkeySubmit}

      onChange={(event) => {
        setNewTuite(event.target.value);
      }}
      
      placeholder='Que que pega zé?' />
  </label>

  <button type='submit'>Tuitar</button>
</form>

  <Separator/>

  {tuites.map(tuite => ( //Toda vez que utilizarmos o map..
    <Tuite /* precisamos passar uma key para o primeiro elemento que estiver dentro do map. */ key={tuite} content={tuite}/>
  ))}
</main>
)
}