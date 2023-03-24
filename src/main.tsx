import React from 'react'
import ReactDOM from 'react-dom/client'
import {Sparkle} from 'phosphor-react'

import './global.css';

import { Tuite } from './components/Tuite';
import Sidebar from './components/Sidebar';
import Separator from './components/Separator';
import { Header } from './components/Header';

const tuites = [
  'tuite 1',
  'tuite 2',
  'tuite 3',
]


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/* React Strict mode serve apenas para nos avisar se algum erro estiver acotnecendo dentro dele, que nesse caso seria os erros que acotnecem na tag <Tweet> */}
    <div className='layout'>
      <Sidebar/>
      <div className='content'>
        <main className='timeline'>
          <Header title='Home'/>

          <form className='new-tuiter-form'>
            <label htmlFor='tuite'>
              <img src='https://github.com/eduardo-r-machado.png' alt='Icon perfi Eduardo Machado' />
              <textarea id='tuite' placeholder='Que que pega zé?' />
            </label>

            <button type='submit'>Tuitar</button>
          </form>

          <Separator/>

          {tuites.map(tuite => ( //Toda vez que utilizarmos o map..
            <Tuite /* precisamos passar uma key para o primeiro elemento que estiver dentro do map. */ key={tuite} content={tuite}/>
          ))}
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
