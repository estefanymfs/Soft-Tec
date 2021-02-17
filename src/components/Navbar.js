import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import { SiMinds} from 'react-icons/si';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {
    const[click, setClick] = useState (false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
         <div className="navbar">
             <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <SiMinds className="navbar-icon"/>
                    SOFT & TEL SAC
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}  
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/listservices' className='nav-links' onClick={closeMobileMenu}>
                            SERVICIOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            NOSOTROS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            CONTACTANOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cotizacion' className='nav-links' onClick={closeMobileMenu}>
                            COTIZACIÓN
                        </Link>
                    </li>
                </ul>
             </div>
         </div>   
         </IconContext.Provider>
        </>
    );
}

export default Navbar;
