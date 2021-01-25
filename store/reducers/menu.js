import PIZZA from '../../data/dummy-data';
import SIZE from '../../data/dummy-data';
import TOPPING from '../../data/dummy-data';
import { SELECT_PIZZA,SELECT_SIZE,SELECT_TOPPING } from '../action/order'

const initialState = {
    allPizza: PIZZA,
    allSize: SIZE,
    allTopping: TOPPING
};

export default (state= initialState, action) =>{
    switch(action.type){
        case SELECT_PIZZA : 
            const pizzaId = action.pizza.id
            const availableItem = [...state.allPizza]
            if(!pizzaId){
                return state;
            }
            for (const key in allPizza){
                if(!allPizza[key].pizzaMenu.find(pizzaId)){
                    availableItem[key].active = false
                }else{
                    availableItem[key].active = true
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