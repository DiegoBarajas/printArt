import React from 'react'
import IconImg from '../assets/icon.png'

const Header = () => {
    return (
        <header className='header'>
            <h1><img className='icon' src={IconImg} alt='Logo'/>PrintArt</h1>
            <h3 variant='h3'>Soluciones impresas para ti</h3>
        </header>
    )
}

export default Header