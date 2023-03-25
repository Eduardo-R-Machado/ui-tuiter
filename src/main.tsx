import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css';


import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/* React Strict mode serve apenas para nos avisar se algum erro estiver acotnecendo dentro dele, que nesse caso seria os erros que acotnecem na tag <Tweet> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
