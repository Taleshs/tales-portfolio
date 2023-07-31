import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import ScrollToTop from './scrollToTop';


import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contato'
import Harley from './pages/Work/Harley/harley'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Router> 
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contato' element={<Contact/>} />
          <Route path='/work/harley-davidson' element={<Harley/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
