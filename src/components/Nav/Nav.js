import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

// images
import logo from '../../assets/logo512.png'
import getpol_logo_white_no_foot from '../../assets/getpol_logo_white_no_foot.png'


const Nav = () => {


    // open & close mobile menu
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    let styleMobileMenu = isOpenMobileMenu ? style.listOpen : '' //menu list close/open
    let styleMobileButtonBurger = isOpenMobileMenu ? style.burgerOpen : '' //button burger close/open



    return (
        <header className={style.background}>
            <nav className={style.container}>
                <NavLink to='/home' className={style.header}>
                    <img className={style.headerImg} src={logo} alt='logo' />
                    <img className={style.headerImg2} src={getpol_logo_white_no_foot} alt='getpol_logo_white_no_foot' />
                </NavLink>
                <ul onClick={() => setIsOpenMobileMenu(false)} className={`${style.list} ${styleMobileMenu}`}>
                    <li className={style.listItem}><NavLink to='/home' activeClassName={style.activeLink} className={style.listItemAnchor}>Strona główna</NavLink></li>
                    <li className={style.listItem}><NavLink to='/realizations' activeClassName={style.activeLink} className={style.listItemAnchor}>Realizacje</NavLink></li>
                    <li className={style.listItem}><NavLink to='/offer' activeClassName={style.activeLink} className={style.listItemAnchor}>Oferta</NavLink></li>
                    <li className={style.listItem}><NavLink to='/contact' activeClassName={style.activeLink} className={style.listItemAnchor}>Kontakt</NavLink></li>
                </ul>
                <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className={`${style.burgerMenu} ${styleMobileButtonBurger}`}>
                    <div className={style.burgerBtn}></div>
                </div>

            </nav>
        </header>
    )
}

export default Nav