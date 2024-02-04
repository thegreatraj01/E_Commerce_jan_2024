import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import slider1 from '../Components/Assets/sliderimage/slider1.jpg'
import slider2 from '../Components/Assets/sliderimage/slider2.jpg'
import slider3 from '../Components/Assets/sliderimage/slider3.jpg'
import UserLayout from '../Components/UserLayout/UserLayout'

const Shop = () => {
  return (
    <>
      <UserLayout>
        < Hero slider1={slider1} slider2={slider2} slider3={slider3} />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
      </UserLayout>
    </>
  )
}

export default Shop