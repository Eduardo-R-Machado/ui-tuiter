import { BellRinging, BookBookmark, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

import tuiterLogo from '../assets/logo-tuite.svg';



import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <img src={tuiterLogo} className='logo' alt='Logo Tuite' />

      <nav className='main-navigation'>
        <NavLink to="/">
          <House weight='fill' />
          <span> Home </span>    </NavLink>
        <NavLink to="/hashtags">
          <Hash weight='regular' />
          <span> Explorar</span> </NavLink>
        <NavLink to="/notifications">
          <BellRinging weight='regular' />
          <span>Notificações </span>
        </NavLink>
        <NavLink to="messages">
          <Envelope weight='regular' />
          <span>Mensagens </span></NavLink>
        <NavLink to="marks">
          <BookBookmark weight='regular' />
          <span> Marcações</span></NavLink>
        <NavLink to="lists">
          <FileText weight='regular' />
          <span> Listas</span>   </NavLink>
        <NavLink to="profile">
          <User />
          <span> Perfil</span>   </NavLink>
        <NavLink to="more">
          <DotsThreeCircle />
          <span>Mais </span>     </NavLink>
      </nav>

      <button className='new-tuiter'>Tuite</button>
    </aside>
  )
}