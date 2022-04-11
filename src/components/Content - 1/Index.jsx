import React from 'react'
import '../../styles/Content.css'
import Image2 from '../../assets/featured-image.svg'
import Arrow from '../../assets/arrow-right.svg'

function Index() {
  return (
    <div>
      <section className='content-page1'>
        <div className='text'>
          <h1 className='text-content'>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
          <h1 className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </h1>
          <div>
            <h2 className='btn-text'>Veja mais <img className='image-content' src={Arrow} alt="image" /></h2>
          </div>
        </div>
        <div className="image">
          <img className='image-context' src={Image2} alt="image" />
        </div>
      </section>
    </div>
  )
}

export default Index