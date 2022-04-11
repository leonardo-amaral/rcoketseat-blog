import React from 'react'
import '../../styles/Content.css'
import Image2 from '../../assets/featured-image.svg'
import Arrow from '../../assets/arrow-right.svg'
import { motion } from 'framer-motion'

function Index() {
  return (
    <div>
      <motion.section className='content-page1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
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
      </motion.section>
    </div>
  )
}

export default Index