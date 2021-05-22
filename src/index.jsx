import React from 'react';
import { render } from 'react-dom';
import './style.css';
import  Footer from "./Footer";
import Header from "./Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';




const App = () => 
   (
  <div className="container">
    <Header />
    <Footer />
    
  </div>
  );

  


render(<App />, document.querySelector('#app'));
/* const App = () => {

  return (
    <Router>
     <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reservation" exact>
           <Reservation />
        </Route>
      </Switch>
    <Footer/>
  </Router>
  )
} */