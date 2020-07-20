import React ,{Component} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Menu from './components/MenuComponents.js';
import DishDetail from './components/DishesDetailcomponent.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import  About from './components/About.js';
import { Route,Switch,Redirect ,withRouter} from 'react-router-dom';
import {connect} from'react-redux';
 const mapStateToProps=state=>{
    return {
    dishes: state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
    }

 }
class Main extends Component{
  constructor(props){
  	super(props);
  }
  	render(){
      const Dish=({match})=>{
        return(
         <DishDetail dishes={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
         comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
       />
          );
      }
  		return(
  			<>
  		 <div>
        <Header />
        <Switch >
        <Route path="/home" component={()=><Home dishes={this.props.dishes.filter((dish)=>dish.featured)[0]}
        leaders={this.props.leaders.filter((leader)=>leader.featured)[0]}
        promotions={this.props.promotions.filter((promotion)=>promotion.featured)[0]}
        />} />
        <Route  exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
        <Route path="/menu/:dishId" component={Dish} />
        <Route path="/contact" component={Contact} />
         <Route path="/about" component={()=><About  leaders={this.props.leaders}/>} />
        <Redirect to="/home" component={Home} />
        </Switch>
  			 <Footer />
        </div>
  			</>
  			);
        }
  	}
  	export default withRouter(connect(mapStateToProps)(Main));