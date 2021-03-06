import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";
// URL :`http://localhost:5000`
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        
        <PrivateRoute path='/BubblePage' component={BubblePage}/>
      
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        
      </div>
    </Router>
  );
}

export default App;
