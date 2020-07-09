import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,NavItem,Nav,NavbarToggler,Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
	constructor(props){
		super(props);
		this.state={
             isNavOpen:false
		};
		this.togglerNav=this.togglerNav.bind(this);
}
		togglerNav(){
            this.setState({
                isNavOpen:!this.state.isNavOpen
            });
		}
	render(){
	return(
		<>
         <Navbar dark expand="md" fixed="top">
         <div className="container">
         <NavbarToggler onClick={this.togglerNav} />
         <NavbarBrand className="mr-auto" href="/">
         <img src="../assets/logo.png" alt="logo" height="30" width="41"/>
         </NavbarBrand>
         <Collapse navbar isOpen ={this.state.isNavOpen}>
          <Nav navbar>
            <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink></NavItem>
            <NavItem><NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About</NavLink></NavItem>
            <NavItem><NavLink  className="nav-link" to="/menu"> <span className="fa fa-list fa-lg"></span>Menu</NavLink></NavItem>
            <NavItem><NavLink className="nav-link" to="/contact"><span className="fa fa-address-card fa-lg"></span>Contact</NavLink></NavItem>
        </Nav>
        </Collapse>
         </div>
         </Navbar>
          <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
      </>


		);
	}
}
export default Header;