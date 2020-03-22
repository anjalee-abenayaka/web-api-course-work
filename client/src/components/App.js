
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import About from "./about";
//import Login from "./RegisterLogin";
//import Register from "./RegisterLogin/register";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
//import Footer from "./views/Footer/Footer"
//import React, { Suspense } from 'react';
//import NavBar from "./views/NavBar/NavBar";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import LandingPage from "./views/LandingPage/LandingPage.js";

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
       </Switch>
     </div>
     <Footer />
   </Suspense>
  
  );
}

export default App;
