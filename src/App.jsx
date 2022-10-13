import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import img1 from "./assets/images/image 4kitob.svg"
import Navbar from "./assets/components/components1";
import New from './assets/components/components2';
import Role from './assets/components/components3';
import Footer from './assets/components/components4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classNameName="App">
     <header className="header-content">
        {/* <!-- NAVBAR  --> */}
        <nav>
            <div className="nav-logo">
                <img src={img1} alt="image"/>
            </div>
            <ul className="nav-ul">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Koleksi</a></li>
                <li><a href="#">Syarat dan Ketentuan</a></li>
                <li><a href="#">Kontak</a></li>
                <li><button>Masuk</button></li>
            </ul>
        </nav>
        <Navbar />
        <New/>
        <Role/>
        <Footer/>
    </header>
    </div>
  )
}

export default App
