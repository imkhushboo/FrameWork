import React ,{Component} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Menu from './components/MenuComponents.js';
import {Dishes} from './shared/dishes.js';
import DishDetail from './components/DishesDetailcomponent.js';

class Main extends Component{
  constructor(props){
  	super(props);
  	this.state={
  		selectedDish:null,
  		dishes:Dishes
  	};
  }
   onSelectedDish(dishId){
  	this.setState({
  		selectedDish:dishId
  	});
  }
 
  	render(){
  		return(
  			<>
  		 <div>
        <Header />
        <Menu dishes={this.state.dishes}  onClick={(dishId)=>this.onSelectedDish(dishId)} />
  			 <Footer />
        </div>
  			</>
  			);
        }
  	}
  	export default Main;