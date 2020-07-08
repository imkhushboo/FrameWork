import React ,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents.js';
import {Dishes} from './shared/dishes.js';

// console.log(Dishes[0].name);
class App extends Component{
	
 constructor(props){
	super(props);
	this.state={dishes:Dishes};
}
render(){
	// console.log(this.state.dishes);
	return (
		<>
		<div className="App">
         <Navbar dark color="primary">
         <div className="container">
         <NavbarBrand>Ristorente Con Fusion
         </NavbarBrand>
         </div>
         </Navbar>
         </div>
         <Menu dishes={this.state.dishes} />
		</>


		);
}
}
export default App;