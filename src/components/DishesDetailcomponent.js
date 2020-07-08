import React ,{Component} from 'react';
import {Card, CardImg ,CardBody,CardText,CardTitle} from 'reactstrap';


class DishDetail extends Component{
  renderComments(selectedDish){
  const com=selectedDish.comments.map((comment)=>{
    return (
      <>
      <div key={comment.id}>
      <ul className="list-unstyled">
       <li > {comment.comment}</li><br></br>
       <li>--{comment.author},{comment.date}</li>
       </ul>
       </div>
       </>
      );

  });
 return (com );}
  renderDish(selectedDish){
  return(
<div key={selectedDish.id} className="col-12 col-md-5 m-1">
<Card >
<CardImg src={selectedDish.image} alt={selectedDish.name}/>
<CardBody>
<CardTitle>{selectedDish.name}</CardTitle>
<CardText>{selectedDish.description}</CardText>
</CardBody>
</Card>
</div>
 );
}
render(){
  return(
   <div className="row">
   {this.renderDish(this.props.selectedDish)}
   <div className="col-12 col-md-5 m-1">
   <h4>Comments</h4>
   {this.renderComments(this.props.selectedDish)}
   </div>
   </div>

  );
}
}
export default DishDetail;