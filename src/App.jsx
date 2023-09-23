import { Routes, Route} from 'react-router-dom'
import './sass/main.scss'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Events from './pages/Events/Event'
import Contact from './pages/Contact/Contact'
import Livestream from './pages/Livestream/Livestream'

function App() {

  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/livestream' element={<Livestream />} />
      </Routes>
    </>
  )
}

export default App
