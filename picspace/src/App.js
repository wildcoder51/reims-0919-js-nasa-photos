import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Basket from './Components/Basket';
import Header from './Components/Header';
import Footer from './Components/Footer'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      basket : []
    }
    this.addToBasket = this.addToBasket.bind(this);
  }
  addToBasket(picture) {
    this.setState({basket : [...this.state.basket, picture]});
  }
  render (){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render ={() => <Home addToBasket={this.addToBasket} />}/>
          <Route path="/basket" render ={() => <Basket content={this.state.basket} />}/>
        </Switch>
        <Footer/>
      </div>
      
    );
  }
}



export default App;
