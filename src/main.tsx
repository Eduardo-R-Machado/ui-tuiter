import React from 'react'
import ReactDOM from 'react-dom/client'
import Eita from './components/Eita'
import Tweet from './components/Tweet'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/* React Strict mode serve apenas para nos avisar se algum erro estiver acotnecendo dentro dele, que nesse caso seria os erros que acotnecem na tag <Tweet> */}
    <Tweet likes={2} user='Eduardo'>Hello world</Tweet>
  </React.StrictMode>,
)
