import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className='cursor-none'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
  )
}

export default App

