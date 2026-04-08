import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop    from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Cursor         from './components/Cursor'
import Preloader      from './components/Preloader'

import Home        from './pages/Home'
import About       from './pages/About'
import ServicesHub from './pages/ServicesHub'
import Industries  from './pages/Industries'
import Partners    from './pages/Partners'
import Contact     from './pages/Contact'
import Blog        from './pages/Blog'

import Hardware      from './pages/services/Hardware'
import Installations from './pages/services/Installations'
import ManagedIT     from './pages/services/ManagedIT'
import Resourcing    from './pages/services/Resourcing'
import Cloud         from './pages/services/Cloud'
import Networking    from './pages/services/Networking'
import Cybersecurity from './pages/services/Cybersecurity'
import UnifiedComms  from './pages/services/UnifiedComms'
import Software      from './pages/services/Software'
import Accessories   from './pages/services/Accessories'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <ScrollProgress />
      <Cursor />
      <Routes>
        <Route path='/'                        element={<Home />} />
        <Route path='/about'                   element={<About />} />
        <Route path='/services'                element={<ServicesHub />} />
        <Route path='/services/hardware'       element={<Hardware />} />
        <Route path='/services/installations'  element={<Installations />} />
        <Route path='/services/managed-it'     element={<ManagedIT />} />
        <Route path='/services/resourcing'     element={<Resourcing />} />
        <Route path='/services/cloud'          element={<Cloud />} />
        <Route path='/services/networking'     element={<Networking />} />
        <Route path='/services/cybersecurity'  element={<Cybersecurity />} />
        <Route path='/services/unified-comms'  element={<UnifiedComms />} />
        <Route path='/services/software'       element={<Software />} />
        <Route path='/services/accessories'    element={<Accessories />} />
        <Route path='/industries'              element={<Industries />} />
        <Route path='/partners'               element={<Partners />} />
        <Route path='/contact'                element={<Contact />} />
        <Route path='/blog'                   element={<Blog />} />
      </Routes>
    </>
  )
}
