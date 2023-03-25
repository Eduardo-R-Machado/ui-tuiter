import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { Tuite } from "../components/Tuite";
import { FormEvent, KeyboardEvent, useState } from "react";

import './Status.css'

/** Fluxo de renderização
 * 
 * 1. Toda vez que o estado de um componente é alterado, TODO o componente é recalculado
 * 2. Toda vez que o componente é recalculado, TODOS os seus filhos são recalculados
 * 3. Toda vex que algumas das propriedades de um componente são alteradas, o componente é recalculado
 * 
 */

/** Algoritimo de Reconciliação
 * 
 * 1.Criar em memória a nova versão do HTML
 * 2.Comparar a nova versão do HTML com a versão anterior (Diff)
 * 3. Aplicar as operações Javascript para alterar somente o necessário no HTML
 *  */
export function Status() {

  const [newAnswers, setNewAnswers] = useState('');
  const [answer, setAnswers] = useState(['Que mizeria ', 'Mizeria é pouco, muito tosco', 'Budaguibariu meu badrin']);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answer])
    setNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      setAnswers([newAnswers, ...answer])
      setNewAnswers('') 
    }
  }

  return (
    <main className='status'>
    <Header title='Tuites'/>
    <Tuite content='O que você acha do React?' />

    <Separator/>

    <form onSubmit={createNewAnswers} className='answer-tuiter-form'>
      <label htmlFor='tuite'>
        <img src='https://github.com/eduardo-r-machado.png' alt='Icon perfi Eduardo Machado' />
        <textarea
         id='tuite'
         placeholder='Responder esta merda!'
         onKeyDown={handleHotkeySubmit}
         value={newAnswers}
          onChange={(event) => {
            setNewAnswers(event.target.value);
          }}
           />
      </label>

      <button type='submit'>Hein?!</button>
    </form>
      
      {answer.map(answer => (
        <Tuite key={answer} content={answer}/>
      ))}

  </main>
  )
}