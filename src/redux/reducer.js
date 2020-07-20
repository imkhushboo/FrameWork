import {DISHES} from '../shared/dishes.js';
import {COMMENTS} from '../shared/Comments.js';
import {LEADERS} from '../shared/Leader.js';
import {PROMOTIONS} from '../shared/Promotion.js';

export const initialState={
    dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS

};
export  const Reducer=(state = initialState,action) =>{
	return state;
}; 