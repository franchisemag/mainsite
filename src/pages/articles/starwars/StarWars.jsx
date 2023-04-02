import React from 'react'

import Navbar from '../../../components/navbar/Navbar'
import CTA from '../../../components/cta/cta-ver-1-1/CTA'
import Footer from '../../../components/footer/Footer'
import ArticleHeader from '../../../components/articles/art-header/ArticleHeader'
import ArticleSection from '../../../components/articles/art-section/ArticleSection'
import Advert from '../../../components/advert/Advert'
import Discussions from '../../../components/discussions/Discussions'

const StarWars = () => {
  return (
    <div>
        <Navbar/>
        <span className='space'></span>
        <ArticleHeader/>
        <span className='space'></span>
        <ArticleSection/>
        <span className='space'></span>
        <Advert/>
        <span className='space'></span>
        <Discussions />
        <span className='space'></span>
        <CTA/>
        <span className='space'></span>
        <Footer/>
    </div>
  )
}

export default StarWars