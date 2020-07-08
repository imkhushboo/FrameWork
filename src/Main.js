import React ,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
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
         <Navbar dark color="primary">
         <div className="container">
         <NavbarBrand>Ristorente Con Fusion
         </NavbarBrand>
          </div>
         </Navbar>
        <Menu dishes={this.state.dishes}  onClick={(dishId)=>this.onSelectedDish(dishId)} />
  			 <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
        </div>
  			</>
  			);
        }
  	}
  	export default Main;