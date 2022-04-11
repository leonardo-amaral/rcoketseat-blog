import React from 'react'
import '../../styles/Main.css'
import Post from '../../assets/post-1.svg'
import Post2 from '../../assets/post-2.svg'
import Post3 from '../../assets/post-3.svg'
import Post4 from '../../assets/post-4.svg'

function Index() {
  return (
    <div className='mother-class'>
      <div className='content'>
        <div className='first-content'>
          <img className='post' src={Post} alt="" />
          <div className='first-content-text'>
            <p>Janeiro 04, 2022</p>
            <h1 className='text-first-content'>Comecando no ReactJS em 2022  </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
          </div>
        </div>
        <div className="second-content">
          <div className='first-part'>
            <p >Janeiro 04, 2022</p>
            <h1 className='title-first-part'>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
          </div>
          <div className="second-part">
            <p>04 Janeiro, 2022</p>
            <h1>Veja a evolução do Front-end na prática</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. </p>
          </div>
        </div>
      </div>
      <div className="box-content">
        <div className="content-post">
          <img className='posts' src={Post2} alt="Postagem" />
          <p>Janeiro 04, 2022</p>
          <h1>10 dicas para conseguir a vaga desejada</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
        <div className="content-post">
          <img className='posts' src={Post3} alt="Postagem" />
          <p>Janeiro 04, 2022</p>
          <h1>10 dicas para conseguir a vaga desejada</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
        <div className="content-post">
          <img className='posts' src={Post4} alt="Postagem" />
          <p>Janeiro 04, 2022</p>
          <h1>10 dicas para conseguir a vaga desejada</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </p>
        </div>
      </div>
    </div>
  )
}

export default Index