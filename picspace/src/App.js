import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Basket from './Components/Basket';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      basket : []
    };
    this.addBasketAndAlert = this.addBasketAndAlert.bind(this);
    this.deletePicture = this.deletePicture.bind(this);
  }
  addBasketAndAlert(picture) {
    this.setState({basket : [...this.state.basket, picture]});
    alert('Added !');
  }

  deletePicture (picture) {
    this.setState({
      basket : this.state.basket.filter(basket => basket.picture !== picture)
      })
      alert('Delete !');
  }
  
  render (){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render ={() => <Home addBasketAndAlert={this.addBasketAndAlert} />}/>
          <Route path="/basket" render ={() => <Basket content={this.state.basket} deleter = {this.deletePicture}/>}/>
        </Switch>
        <Footer/>
      </div>
      
    );
  }
}



export default App;
