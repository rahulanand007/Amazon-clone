import React from 'react'
import "../styling/Home.css"
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg' alt=''/>
        </div>

        <div className='home__row row__one'>
            <Product title='OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)' price='72000' rating={4} image ='https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg'/>
            <Product title='GLUN Bolt Electronic Portable Fishing Hook Type Digital LED Screen Luggage Weighing Scale, 50 kg/110 Lb (Black)' price='2000' rating={4} image='https://images-eu.ssl-images-amazon.com/images/I/81fbeqxvQKL._AC_UL675_SR675,480_.jpg'/>
        </div>
        <div className='home__row'>
            <Product/>
            <Product/>
            <Product/>
            
        </div>
        <div className='home__row'>
            <Product title='Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black) (2022 Model)' price='28000' rating={4} image='https://m.media-amazon.com/images/I/7132bixhytL._AC_UY436_FMwebp_QL65_.jpg'/>
            
        </div>
    </div>
  )
}

export default Home