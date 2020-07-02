import React ,{ Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            dishes: [
                {
                    id:0,
                    name:'Uthapizza',
                    image:'./assets/uthapizza.png',
                    category:'mains',
                    label:'HOT',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
                },
                {
                    id:1,
                    name:'Zucchipakoda',
                    image:'./assets/zucchipakoda.png',
                    category:'appetizer',
                    label:'',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
                },
                {
                    id:2,
                    name:'Vadonut',
                    image:'./assets/vadonut.png',
                    category:'appetizer',
                    label:'NEW',
                    price:'1.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
                },
                {
                    id:3,
                    name:'Elaicheese Cake',
                    image:'./assets/elaicheesecake.png',
                    category:'dessert',
                    label:'',
                    price:'2.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer'
                }
            ]
        }
    }
    render(){
        const menu=this.state.dishes.map((dish)=>{
              return <div key={dish.id} className="col-12 mt-5">
              <Media tag="li">
                    <Media left middle>
                     <Media object src={dish.image} alt={dish.name}></Media>
                     </Media>
              <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
          </Media>
          </Media>
            </div>
           
            
              
        });
        return(
        <>
          <div className="container">
              <div className="row">
                  <Media list>
                      {menu}
                  </Media>
              </div>
          </div>
          </>
        );

        
    }
}
export default Menu;