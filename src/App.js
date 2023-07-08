import './App.css';
import './styles/styles.css';
import Home from './components/home/Home';
import Footer from './components/home/Footer';
import About from './components/about/About';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="">
      <Header />
      <div className='application-container'>
        <Routes>
          <Route path='/catering-website/' element={<Home />} />
          <Route path='/' element={<Home />} />

          <Route path='/catering-website/about' element={<About />} />
          <Route path='/about' element={<About />} />

          <Route path='/catering-website/clients' element={<Home />} />
          <Route path='/clients' element={<Home />} />

          <Route path='/catering-website/contact' element={<Home />} />
          <Route path='/contact' element={<Home />} />          

        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
