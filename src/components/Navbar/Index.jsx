import React from 'react'
import '../../styles/Navbar.css'
import Logo from '../../assets/logo.svg'
import ButtonSearch from '../../assets/Button-search.svg'
import { motion } from 'framer-motion'

function Index() {
  return (
    <div>
      <header>
        <motion.nav
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}>
          <img src={Logo} alt="Logo" />
          <div className='navbar-content'>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Categorias</a>
            <a href="#">Contatos</a>
          </div>
          <div className="pesquisar">
            <input className='input-search' type="text" placeholder='Buscar' />
            <img className='img-button' src={ButtonSearch} alt="" />
          </div>
        </motion.nav>
      </header>
    </div>
  )
}

export default Index