import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
import menBanner from './Components/Assets/banner_mens.png';
import womenBanner from './Components/Assets/banner_women.png';
import kidBanner from './Components/Assets/banner_kids.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAdmin from './Admin/Components/CheckAdmin';
import AddProduct from './Admin/pages/AddProduct';
import ErrorPage from './Pages/Error';
import Orders from './Admin/pages/Orders';
import ProductList from './Admin/pages/ProducList/ProductList';
// import { useSelector } from 'react-redux';

function App() {
  // const user = useSelector(state => state.user);
  // const isAdmin = user.isAdmin;
  
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category='men' banner={menBanner} />} />
          <Route path='/women' element={<ShopCategory category='women' banner={womenBanner} />} />
          <Route path='/kids' element={<ShopCategory category='Kid' banner={kidBanner} />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productid' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          {/* ---------------------------------------------------------------- */}
          {/* for admin route */}
          <Route path='/admin' element={<CheckAdmin />}>
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='orders' element={<Orders/>} />
            <Route path='productlist' element={<ProductList/>} />
          </Route>
          {/* Error page for unmatched routes */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
