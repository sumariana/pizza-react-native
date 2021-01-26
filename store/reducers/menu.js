import PIZZA from '../../data/pizza-data';
import SIZE from '../../data/size-data';
import TOPPING from '../../data/topping-data';
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
            const availableItem = []
            if(!pizzaId){
                return state;
            }
            for (const key in TOPPING){
                if(TOPPING[key].pizzaMenu.includes(pizzaId)){
                    //if the pizza id is in toppings
                    //availableItem[key].active = false
                    console.log(TOPPING[key].title)
                }else{
                    //availableItem[key].active = true
                }
            }
            return {
                ...state,
                allTopping : availableItem
            };
        default : 
            return initialState
    }
    return state;
};