import store from './store/Store';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Singlepage from './pages/Singlepage/Singlepage';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<Singlepage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
