import '../App.css';
import logo from './escudo.png';

import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
   return (
        <nav className='navbar'>
            <img src={logo} className='logo' alt="Logo" />
            <ul>
                <li>Niños</li>
                <li>Adolescentes</li>
                <li>Adultos</li>
                <li>First</li>
                <li>Acelerados</li>
            </ul>
            <CartWidget />
        </nav>
   )
}