import PIZZA from '../../data/pizza-data';
import SIZE from '../../data/size-data';
import TOPPING from '../../data/topping-data';
import Topping from '../../model/toppingModel';
import { RESET_ITEM } from '../action/menu';
import { SELECT_PIZZA,SELECT_SIZE,SELECT_TOPPING } from '../action/order'

const initialState = {
    allPizza: PIZZA,
    allSize: SIZE,
    allTopping: TOPPING,
    availableToppings: []
};

export default (state= initialState, action) =>{
    switch(action.type){
        case SELECT_PIZZA : 
            const pizzaId = action.pizza.id
            let availableItem = []
            if(!pizzaId){
                return state;
            }
            for (const key in TOPPING){
                if(TOPPING[key].pizzaMenu.includes(pizzaId)){
                    //if the pizza id is in toppings
                    availableItem = availableItem.concat(TOPPING[key].id)
                }
            }
            return {
                ...state,
                availableToppings: availableItem
            };

        case RESET_ITEM :
            return{
                ...state,
                availableToppings: []
            };
    }
    return state
};