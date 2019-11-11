import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Basket from './Components/Basket';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App (){
  return (
    <div>
    <div> 
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/basket" component ={Basket}/>
      </Switch>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  );
}



export default App;
