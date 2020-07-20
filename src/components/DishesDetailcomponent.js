import React  from 'react';
import {Card, CardImg ,CardBody,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from'react-router-dom';
function RenderComments({comments}){
  const com=comments.map((comment)=>{
    return (
      <div key={comment.id}>
      <ul className="list-unstyled">
       <li > {comment.comment}</li>
       <li>--{comment.author},{new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
       </ul>
       </div>
    
      );});
  return(
  <div>
  <h4>Comments</h4>
  {com}
  </div>

    );
 }


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
  if(props.dishes&&props.comments){
  return(
    <>
   <div className="container">
    <div className="row">
            <Breadcrumb className="col-12">
                <BreadcrumbItem active>DishDetail</BreadcrumbItem>
                   <BreadcrumbItem ><Link to="../menu" >Menu</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>Dish</h3>
               <hr />
            </div>
            </div>
   <div className="row">
   <div className="col-12 col-md-5 m-1">
   <RenderDish selectedDish={props.dishes} />
   </div>
   <div className="col-12 col-md-5 m-1">
   <RenderComments comments={props.comments} />
   </div>
   </div>
   </div>
  
  </>);}
  else{
    return(
    <div></div>);}
  
 

  
}

export default DishDetail;