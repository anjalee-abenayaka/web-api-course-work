
import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import About from "./about";
import Login from "./RegisterLogin";
import Register from "./RegisterLogin/register";
//import Footer from "./views/Footer/Footer"
//import React, { Suspense } from 'react';
//import NavBar from "./views/NavBar/NavBar";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

function App() {
  return (
    
     <Suspense fallback={(<div>Loading...</div>)}>
     <NavBar />
     <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
       <Switch>
         <Route exact path="/login" component={Auth(Login, false)} />
         <Route exact path="/register" component={Auth(Register, false)} />
       </Switch>
     </div>
     <Footer />
   </Suspense>
  
  );
}

export default App;
