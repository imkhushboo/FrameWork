import React from 'react';
import {Card, CardImg ,CardImgOverlay,CardTitle} from 'reactstrap';
 function RenderCard({dish,onClick}){
 	return(
          <Card  onClick={()=>onClick(dish.id)}>
           <CardImg src={dish.image} alt={dish.name}/>
           <CardImgOverlay>
           <CardTitle >{dish.name}</CardTitle>
           </CardImgOverlay>
           </Card>
           );

 }
const Menu =(props)=>{
	const menu=props.dishes.map((dish)=>{
		return(
			<div  key={dish.id}className="col-12 col-md-5 m-1">
			<RenderCard dish={dish} onClick={props.onClick} />
            </div>
			);
	});
	return (
       <div className="container">
         <div className="row">
        {menu}
        </div>
       </div>



		);
}

export default Menu;