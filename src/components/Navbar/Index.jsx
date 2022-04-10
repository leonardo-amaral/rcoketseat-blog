import React from 'react'
import '../../styles/Navbar.css'
import Logo from '../../assets/logo.svg'
import ButtonSearch from '../../assets/Button-search.svg'

function Index() {
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} alt="Logo" />
          <div className='navbar-content'>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Categorias</a>
            <a href="#">Contatos</a>
          </div>
          <div className="pesquisar">
            <input className='input-search' type="text" placeholder='Buscar' />
            <img src={ButtonSearch} alt="" />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Index