import TOPPING from '../../data/topping-data';
import { SELECT_PIZZA,SELECT_SIZE,SELECT_TOPPING,COUNT_TOTAL } from '../action/order'



const initialState = {
    pizza: {}, //pizza item
    size: {}, //size item
    toppings: [], //select topping this will determines the ischecked of the checkbox
    totalPrice: 0 //total price
}

export default (state=initialState,action) =>{
    switch(action.type){
        case SELECT_PIZZA :
            const addedPizza = action.pizza;  
        
            if(state.pizza[addedPizza.id]){
                //alreaady selected
                return state;
            }
            return {
                ...state,
                pizza: addedPizza,
                toppings: []
            };
        case SELECT_SIZE :
            const addedSize = action.size
            const price = addedSize.price
            
            if(state.size[addedSize.id]){
                return state;
            }
            return {
                ...state,
                size: addedSize
            };

        case SELECT_TOPPING : 
            const topping = action.topping;

            let updatedTopping=[...state.toppings];

            if(state.toppings.includes(topping.id)){
                //already in list will be removed
                const index = updatedTopping.indexOf(topping.id)
                if(index>-1) updatedTopping.splice(index,1)
            }else{
                //not already in list
                updatedTopping = updatedTopping.concat(topping.id)
            }
            return{
                ...state,
                toppings: updatedTopping
            };
        case COUNT_TOTAL :
            const pizzaPrice = state.pizza.price
            const sizePrice = state.size.price
            let toppingPrice = 0
            for (const key in state.toppings){
                const price = TOPPING.find(item=>item.id === state.toppings[key])
                toppingPrice += price.price
            }
            //console.log(toppingPrice)
            const total = pizzaPrice + sizePrice + toppingPrice
            return {
                ...state,
                totalPrice: total
            };
    }
    return state;
};