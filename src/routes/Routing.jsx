import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cocreacion from '../pages/Cocreacion'
import PodcastReflexion from '../pages/PodcastReflexion'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocreacion" element={<Cocreacion />} />
        <Route path="/podcast-reflexion" element={<PodcastReflexion />} />
    </Routes>
  )
}

export default Routing