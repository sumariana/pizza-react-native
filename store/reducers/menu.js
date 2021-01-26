import PIZZA from '../../data/pizza-data';
import SIZE from '../../data/size-data';
import TOPPING from '../../data/topping-data';
import Topping from '../../model/toppingModel';
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
                    availableItem = availableItem.concat(TOPPING[key])
                }
            }
            console.log(availableItem)
            return {
                ...state,
                availableToppings: availableItem
            };
        default : 
            return initialState
    }
    return state;
};