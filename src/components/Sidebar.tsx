import { BellRinging, BookBookmark, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";
import tuiterLogo from '../assets/logo-tuite.svg'; 

import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
    <img src={tuiterLogo} className='logo' alt='Logo Tuite' />

    <nav className='main-navigation'>
      <a className='active' href="">
        <House weight='fill'/>
        Home</a>
      <a href="">
        <Hash weight='regular'/>
        Explorar</a>
      <a href="">
        <BellRinging weight='regular'/>
        Notificações
        </a>
      <a href="">
        <Envelope weight='regular'/>
        Mensagens</a>
      <a href="">
        <BookBookmark weight='regular'/>
        Marcações</a>
      <a href="">
        <FileText weight='regular'/>
        Listas</a>
      <a href="">
        <User />
        Perfil</a>
      <a href="">
        <DotsThreeCircle />
        Mais</a>
    </nav>

    <button className='new-tuiter'>Tuite</button>
  </aside>
  )
}