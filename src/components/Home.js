import React from 'react';
import {Card, CardImg ,CardTitle,CardSubtitle,CardBody,CardText,BreadcrumbItem,Breadcrumb} from  'reactstrap';
import {Link} from'react-router-dom';
 function RenderDish({item}){
  return(
      <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
      <CardTitle>{item.name}</CardTitle>
     {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
      <CardText>{item.description}</CardText>
      </CardBody>
      </Card>
    );

 }
function Home(props){
	return (
		 <div className="container">
        <div className="row">
            <Breadcrumb className="col-12">
                <BreadcrumbItem active>Home</BreadcrumbItem>
                  <BreadcrumbItem ><Link to="./about">About</Link></BreadcrumbItem>
                   <BreadcrumbItem ><Link to="./menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem  ><Link to="./contact">Contact Us</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>Home</h3>
               <hr />
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-md m-1">
            <RenderDish item={props.dishes} />
            </div>  
             <div className="col-12 col-md m-1">
            <RenderDish item={props.promotions} />
            </div>  
             <div className="col-12 col-md m-1">
            <RenderDish item={props.leaders} />
            </div>
            </div>  
            </div>
		);
}
export default Home;