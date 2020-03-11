import React from 'react';
import { Route, Switch} from "react-router-dom";
import About from "./about";

function App() {
  return (
    <div>
      <switch>
        <Route path="/about" component={About}/>
      </switch>
    </div>
  );
}

export default App;
