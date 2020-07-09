import React ,{Component} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Menu from './components/MenuComponents.js';
import {Dishes} from './shared/dishes.js';
import DishDetail from './components/DishesDetailcomponent.js';
import Home from './components/Home.js';
import { Route,Switch,Redirect} from 'react-router-dom';

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
        <Switch >
        <Route path="/home" component={Home} />
        <Route  exact path="/menu" component={()=> <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onSelectedDish(dishId)} />} />
        if(selectedDish){
        <Route path="/dishdetail" component={()=> <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)} />} />}
        <Redirect to="/home" component={Home} />
        </Switch>
  			 <Footer />
        </div>
  			</>
  			);
        }
  	}
  	export default Main;