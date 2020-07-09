import React  from 'react';
import {Card, CardImg ,CardBody,CardText,CardTitle} from 'reactstrap';


function RenderComments({selectedDish}){
  const com=selectedDish.comments.map((comment)=>{
    return (
      <div key={comment.id}>
      <ul className="list-unstyled">
       <li > {comment.comment}</li>
       <li>--{comment.author},{new Intl.DateTimeFormat('en-us',{year:'numeric' ,month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
       </ul>
       </div>
    
      );
  });
return(
<div> 
 <h4>Comment</h4>
 {com}
 </div> );}


function RenderDish({selectedDish}){
return(
<Card >
<CardImg src={selectedDish.image} alt={selectedDish.name}/>
<CardBody>
<CardTitle>{selectedDish.name}</CardTitle>
<CardText>{selectedDish.description}</CardText>
</CardBody>
</Card>
 );}
const DishDetail=(props)=>{
  if(props.selectedDish){
  return(
    <>
   <div className="container">
   <div className="row">
   <div className="col-12 col-md-5 m-1">
   <RenderDish selectedDish={props.selectedDish} />
   </div>
   <div className="col-12 col-md-5 m-1">
   <RenderComments selectedDish={props.selectedDish} />
   </div>
   </div>
   </div>
  
  </>);}
  else{
    return(
    <div></div>);}
  
 

  
}

export default DishDetail;