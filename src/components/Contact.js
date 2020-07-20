import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem ,Form, FormGroup, Label, Input, Col ,Button,FormFeedback} from'reactstrap';
import {Link} from 'react-router-dom';
class Forms extends Component{
  constructor(props){
    super(props);
    this.state={
           firstname:"",
           lastname:"",
           telnum:"",
           email:"",
           approve:false,
           contact:'Tel.',
           message:'',
           touched:{
          firstname:false,
             lastname:false,
             telnum:false,
             email:false
            }
    };
    this.inputevent=this.inputevent.bind(this);
    this.SubmitHandle=this.SubmitHandle.bind(this);
    this.handleblur=this.handleblur.bind(this);
  }
  inputevent(e){
    const target=e.target;
    const value=target.type==='checkbox'?target.checked:target.value;
    const name=target.name;
   
 this.setState({
     [name]:value
    })
  }

  handleblur=(field)=>(e)=>{
    console.log(e.target);
    this.setState({
      touched:{...this.state.touched,[field]:true}
    });
  }
SubmitHandle(e){
   console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
e.preventDefault();
}
validate(firstname,lastname,telnum,email){
const error={
           firstname:"",
           lastname:"",
           telnum:"",
           email:"",
};
if(this.state.touched.firstname&&firstname.length<3)
  error.firstname='First name should be more than 3 characters';
else if(this.state.touched.firstname&&firstname.length>10)
  error.firstname='First name should be less than 10 characters';

if(this.state.touched.lastname&&lastname.length<3)
  error.lastname='Last name should be more than 3 characters';
else if(this.state.touched.lastname&&lastname.length>10)
  error.lastname='Last name should be less than 10 characters';

 const reg=/^\d+$/;
 if(this.state.touched.telnum&& !reg.test(telnum))
  error.telnum='Tel. numbers should contain only numbers';

if(this.state.touched.email&&email.split('').filter(x=>x==='@').length!==1)
  error.email='Email should contain @ sign';
  return error;


}

  render(){
    const error=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
    return(
      <>
      <Form  onSubmit={this.SubmitHandle} >
      <FormGroup row>
                        <Label htmlFor="firstname" md={2}>firstname</Label>
                       <Col md={10}>
                            <Input value={this.state.firstname} valid={error.firstname===""} invalid={error.firstname!==""} onChange={this.inputevent} onBlur={this.handleblur('firstname')} type="text"  id="firstname" name="firstname"
                            placeholder="First Name" />
                            <FormFeedback>{error.firstname}</FormFeedback>
                        </Col>
                        
      </FormGroup>
      <FormGroup row>
                        <Label htmlFor="lastname" md={2}>Lastname</Label>
                       <Col md={10}>
                            <Input value={this.state.lastname} valid={error.lastname===""} invalid={error.lastname!==""} onChange={this.inputevent} onBlur={this.handleblur('lastname')} type="text"  id="lastname" name="lastname"
                            placeholder="Last Name" />
                             <FormFeedback>{error.lastname}</FormFeedback>

                        </Col>
                       
      </FormGroup>
      <FormGroup row>
                            <Label htmlFor="telnum" className=" col-12 col-md-2 col-form-Label">Contact Tel.</Label>
                            <Col md={10}>
                                <Input value={this.state.telnum} valid={error.telnum===""} invalid={error.telnum!==""} onChange={this.inputevent} onBlur={this.handleblur('telnum')} type="tel" id="telnum" name="telnum"
                                placeholder="Tel. Number" />
                                <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                                

      </FormGroup>
      <FormGroup row>
                            <Label htmlFor="emailid" md={2}>Email</Label>
                           <Col md={10}>
                                <Input value={this.state.email}  valid={error.email===""} invalid={error.email!==""}onChange={this.inputevent} onBlur={this.handleblur('email')} type="email"  id="emailid" 
                                name="email"
                                placeholder="Email" />
                                <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                                

      </FormGroup>
      <FormGroup row>
                            <Col md={{size:6 ,offset:2}}>
                                <FormGroup check>
                                    <Input type="checkbox" name="approve"
                                   checked={this.state.approve} onChange={this.inputevent}/>
                                    <Label  htmlFor="approve">
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3 ,offset:1}}>
                                <select className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </select>
                            </Col>
      </FormGroup>
      <FormGroup row>
                            <Label htmlFor="Feedback" md={2}>Your Feedback</Label>
                           <Col md={10}>
                           <Input type="textarea" id="Feedback" name="Feedback"
                                rows="12" />
                                </Col>

      </FormGroup>
      <FormGroup row>
                                <Col md={{offset:2 ,size:10}}>
                                    <Button type="submit"color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
      </FormGroup>
                           
</Form>
                    </>
                      );
  }
  }

///Contact

class Contact extends Component{
  render(){
  return(
 <div className="container">
        <div className="row">
            <Breadcrumb className="col-12">
                <BreadcrumbItem ><Link to="./home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem ><Link to="./about">About</Link></BreadcrumbItem>
                   <BreadcrumbItem ><Link to="./menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem  active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>Contact Us</h3>
               <hr />
            </div>
            </div>
        
<div className="row row-content">
           <div className="col-12">
              <h3>Location Information</h3>
           </div>
            <div className="col-12 col-sm-4 offset-sm-1">
                   <h5>Our Address</h5>
                    <address >
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone"></i>: +852 1234 5678 <br />
		              <i className="fa fa-fax"></i>: +852 8765 4321 <br />
		              <i className="fa fa-envelope"></i>:
                        <a href="confusion@food.net">confusion@food.net</a>
		           </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a href="tel:1234567890" role="button" className="btn btn-primary" ><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                    <a href="mailto: confusion@food.net" role="button" className="btn btn-success" ><i className="fa fa-envelope-o"></i>Email</a>
                </div>
            </div>
        </div>
           <div className="row row-content">
           <div className="col-12 col-md-12">
              <h3>Send us your Feedback</h3>
           </div>
            <div className="col-12 col-md-9">
                <Forms/>
                 
                
            </div>
    </div>
</div>



  	);

}
}

export default Contact;