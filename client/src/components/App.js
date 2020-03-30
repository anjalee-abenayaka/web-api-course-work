
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
//import About from "./about";
//import Login from "./RegisterLogin";
//import Register from "./RegisterLogin/register";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
//import Footer from "./views/Footer/Footer"
//import React, { Suspense } from 'react';
//import NavBar from "./views/NavBar/NavBar";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import LandingPage from "./views/LandingPage/LandingPage";
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import About from './about/About';

function App() {
  return (
    
     <Suspense fallback={(<div>Loading...</div>)}>
     <NavBar />
     <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
       <Switch>
       <Route exact path="/" component={Auth(LandingPage, null)} />
         <Route exact path="/login" component={Auth(LoginPage, false)} />
         <Route exact path="/register" component={Auth(RegisterPage, false)} />
         <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
         <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
         <Route exact path="/user/cart" component={Auth(CartPage, true)} />
         <Route exact path="/About" component={Auth(About, null)} />
       </Switch>
     </div>
     <Footer />
   </Suspense>
  
  );
}

export default App;
