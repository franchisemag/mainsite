import React from 'react'

import Navbar from "../../components/navbar/Navbar"
import PageTitle from "../../components/pagetitle/PageTitle"
import Header from "../../components/header/Header";
import Advert from "../../components/advert/Advert"
import CTA from '../../components/cta/cta-ver-1-1/CTA';
import Footer from "../../components/footer/Footer"

import MoviesSection from '../../components/section/MoviesSection';
import TVSection from '../../components/section/TVSection';
import AnimeSection from '../../components/section/AnimeSection';
import NovelsSection from '../../components/section/NovelsSection';
import ComicsSection from '../../components/section/ComicsSection';
import AlbumsSection from '../../components/section/AlbumsSection';
import SoundtracksSection from '../../components/section/SoundtracksSection';



const Home = () => {
  return (
    <div>
        <Navbar/>

        <PageTitle name = {"Home"}/>

        <Header/>

        <span className = "space"/>

        <MoviesSection 
        sectionHeading = "Movies"/>
        <Advert />

        <span className = "space"/>

        <TVSection 
        sectionHeading = "TV Shows"/>
        <Advert />

        <span className = "space"/>

        <AnimeSection
        sectionHeading = "Anime"/>
        <Advert/>

        <span className = "space"/>

        <NovelsSection
        sectionHeading = "Novels"/>
        <Advert/>

        <span className = "space"/>

        <ComicsSection
        sectionHeading = "Comics"/>
        <Advert/>

        <span className = "space"/>

        <AlbumsSection
        sectionHeading = "Albums"/>
        <Advert/>

        <span className = "space"/>

        <SoundtracksSection
        sectionHeading = "Soundtracks"/>
        <Advert/>

        <span className = "space"/>

        <CTA/>

        <span className = "space"/>

        <Footer />
    </div>
  )
}

export default Home