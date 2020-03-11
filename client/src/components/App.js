import React from 'react';
import { Route, Switch} from "react-router-dom";
import About from "./about";
import Login from "./RegisterLogin";
import Register from "./RegisterLogin/register";
//import Footer from "./views/Footer/Footer"
//import React, { Suspense } from 'react';
//import NavBar from "./views/NavBar/NavBar";

function App() {
  return (
    
    <div>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  
  );
}

export default App;
