import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import Jobs from './components/pages/Jobs'
import Talents from './components/pages/Talents'
import Pages from './components/pages/Pages'
import Contact from './components/pages/Contact'
import Subscriptions from './components/pages/Subscriptions'

import Service from './components/pages/Service'

function App() {
 

  return (
   <>
   <Routes>
    <Route path='/' element={<RootLayouts/>}>
    <Route index element={<Home/>}/>
    <Route path='Jobs' element={<Jobs/>}/>
    <Route path='Talents' element={<Talents/>}/>
    <Route path='subscriptions' element={<Subscriptions/>}/>
    <Route path='Pages' element={<Pages/>}/>
    <Route path='Contact' element={<Contact/>}/>
    
    <Route path='service' element={<Service/>}/>

    </Route>
   </Routes>
   </>
  )
}

export default App
