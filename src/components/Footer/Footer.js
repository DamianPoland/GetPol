import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import logo from '../../assets/logo.png'



const Footer = () => {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <Link to='/privacy-policy' className={`${style.text} ${style.link}`}>Polityka prywatności</Link>
                <p className={style.text}>Copyright © getpol 2020</p>
                <a href="https://studio-www.com" className={style.designedBy} target="_blank" rel="noopener noreferrer">
                    <span className={`${style.text} ${style.textLeft}`}>Designed by</span>
                    <img className={style.logo} src={logo} alt='logo' />
                    <span className={`${style.text} ${style.textRight}`}>studio-www.com</span>
                </a>
            </div>
        </div>
    )
}

export default Footer