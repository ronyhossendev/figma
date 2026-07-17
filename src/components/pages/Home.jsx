import React from 'react'
import Banner from '../layouts/Banner'
import Jobs from './Jobs'
import Talents from './Talents'
import Subscriptions from './Subscriptions'
import Pages from './Pages'

import Contact from './Contact'
import Service from './Service'

const Home = () => {
  return (
    <>
    <Banner/>
    <Jobs/>
    <Talents/>
    <Subscriptions/>
    <Pages/>
   
    <Contact/>
    <Service/>
    </>
  )
}

export default Home