import './App.css';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Blog } from './components/Blog.jsx';
import { Tshirt } from './components/Tshirt.jsx';
import { ProductDetail } from './components/ProductDetail.jsx';


function App() {
  return (<>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/tshirt' element={<Tshirt />} />
        <Route exact path='/productDetail' element={<ProductDetail />} />
      </Routes>
    </Router>
    <Footer />
  </>);
}

export default App;
