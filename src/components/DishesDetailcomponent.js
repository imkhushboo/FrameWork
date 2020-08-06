import React ,{Component} from 'react';
import {Card, CardImg ,CardBody,CardText,CardTitle,Button,Breadcrumb,BreadcrumbItem,Modal,ModalHeader,ModalBody,Label,Row,Col} from 'reactstrap';
import {Link} from'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
 constructor(props){
  super(props);
  this.state={
     isModalOpen:false
   };
this.toggleModal=this.toggleModal.bind(this);
 this.handleLogin=this.handleLogin.bind(this);
}
toggleModal(){
    this.setState({
                isModalOpen:!this.state.isModalOpen
            });
}
handleLogin(values){
  this.toggleModal();
  alert('Current State is: ' + JSON.stringify(values));
   
}

  render(){
return(
  <>
  <Button outline onClick={this.toggleModal} ><span  className="fa fa-pencil fa-lg"></span>submit comment</Button>
     <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm  onSubmit={(values)=>{this.handleLogin(values)}}>
                <Row className="form-group">
                   <Label htmlFor="rating" md={12} >Rating</Label>
                   <Col md={{ size: 12 }}>
                   <Control.select model=".rating"id="rating" name="rating" className="form-control" >
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                   <Label htmlFor="author" md={12} >Your Name</Label>
                   <Col md={{ size: 12 }}>
                   <Control.text model=".author" id="author" name="author" className="form-control" placeholder="Your Name" validators={{
                              required,minLength:minLength(3),maxLength:maxLength(15)
                            }} />
                   <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="Feedback" md={12} >Comments</Label>
                    <Col md={{ size: 12 }}>
                    <Control.textarea model=".message" id="Feedback" name="Feedback"
                                rows="6" 
                                className="form-control"/>
                                
                     </Col>
                 </Row>
                <Row className="form-group">
                <Col md={{ size: 12 }}>
                <Button type="submit" color="primary"  >Submit</Button>
               </Col>
               </Row>
          </LocalForm>

          </ModalBody>
          </Modal>
          </>
        );

  }
}


function RenderComments({comments}){
  const com=comments.map((comment)=>{
    return (
      <div key={comment.id}>
      <ul className="list-unstyled">
       <li > {comment.comment}</li><br />
       <li>--{comment.author},{new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
       </ul>
       </div>
    
      );});
  return(
  <div>
  <h4>Comments</h4>
  {com}
  <CommentForm />
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