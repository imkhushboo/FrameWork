import React ,{Component} from 'react';
import {Card, CardImg ,CardBody,CardText,CardTitle} from 'reactstrap';


class DishDetail extends Component{
  componentDidMount(){
  console.log('component did mount');
}
 componentDidUpdate(){
  console.log('component did update');
}
  renderComments(selectedDish){
    if(selectedDish){
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
}

  renderDish(selectedDish){
    if(selectedDish){
  return(
<Card >
<CardImg src={selectedDish.image} alt={selectedDish.name}/>
<CardBody>
<CardTitle>{selectedDish.name}</CardTitle>
<CardText>{selectedDish.description}</CardText>
</CardBody>
</Card>
 );}
}
render(){
   console.log('DishDetail component didmount render invoked');
  return(
  <div className="container">
   <div className="row">
   <div className="col-12 col-md-5 m-1">
   {this.renderDish(this.props.selectedDish)}
   </div>
   <div className="col-12 col-md-5 m-1">
   {this.renderComments(this.props.selectedDish)}
   </div>
   </div>
   </div>
  );
}
}
export default DishDetail;