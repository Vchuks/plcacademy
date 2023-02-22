import React from 'react'
import Accredit from '../molecules/Accredit'
import Certificate from '../molecules/Certificate'
import Enroll from '../molecules/Enroll'
import Faq from '../molecules/Faq'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'
import Press from '../molecules/Press'
import Talent from '../molecules/Talent'
import UpperPart from '../molecules/UpperPart'
import VideoPart from '../molecules/VideoPart'
import WhySection from '../molecules/WhySection'

const Home = () => {
  return (
    <div>
      <Header />
      <UpperPart/>
      <Certificate/>
      <VideoPart/>
      <WhySection/>
      <Accredit/>
      <Press/>
      <Enroll/>
      <Faq/>
      <Talent/>
      <Footer/>
    </div>
  )
}

export default Home
