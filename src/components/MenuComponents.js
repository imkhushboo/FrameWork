import React from 'react';
import {Card, CardImg ,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
 import {Link} from'react-router-dom';
 function RenderCard({dish,onClick}){
 	return(  
    <Link to={`/menu/${dish.id}`} >
          <Card>
           <CardImg src={dish.image} alt={dish.name}/>
           <CardImgOverlay>
           <CardTitle >{dish.name}</CardTitle>
           </CardImgOverlay>
           </Card>
           </Link >
           );

 }
const Menu =(props)=>{
	const menu=props.dishes.map((dish)=>{
		return(
		<>
			<div  key={dish.id}className="col-12 col-md-5 m-1">
			<RenderCard dish={dish} onClick={props.onClick} />
            </div>
            </>
			);
	});
	return (
       <div className="container">
        <div className="row">
            <Breadcrumb className="col-12">
                <BreadcrumbItem ><Link to="./home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem ><Link to="./about">About</Link></BreadcrumbItem>
                   <BreadcrumbItem active>Menu</BreadcrumbItem>
                <BreadcrumbItem  > <Link to="./contact">Contact Us</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>Menu</h3>
               <hr />
            </div>
            </div>
         <div className="row">
        {menu}
        </div>
       </div>



		);
}

export default Menu;