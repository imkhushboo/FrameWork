import React ,{Component} from 'react';
import {Card, CardImg ,CardImgOverlay,CardTitle} from 'reactstrap';
import DishDetail from './DishesDetailcomponent.js';
class Menu extends Component{
  constructor(props){
  	super(props);
  	this.state={
  		selectedDish:null
  	};
  }
   onSelectedDish(dish){
  	this.setState({
  		selectedDish:dish
  	});}
   
   renderDish(dish){
   	if(dish!=null){
   		return(
   		<DishDetail selectedDish={this.state.selectedDish} />);
   	}
   	else{
   		return(
       <div></div>);

   	}
   }

render(){
	const menu=this.props.dishes.map((dish)=>{
		return(
           <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={ ()=>this.onSelectedDish(dish)}>
           <CardImg src={dish.image} alt={dish.name}/>
           <CardImgOverlay>
           <CardTitle >{dish.name}</CardTitle>
           </CardImgOverlay>
           </Card>
          </div>
			);
	});
	return (
       <div className="container">
         <div className="row">
        {menu}
         </div>
           {this.renderDish(this.state.selectedDish)}
           
         
       </div>



		);
}


}
export default Menu;