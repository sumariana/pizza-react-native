import { SELECT_PIZZA,SELECT_SIZE,SELECT_TOPPING } from '../action/order'
import PIZZA from '../../data/pizza-data';
import SIZE from '../../data/size-data';


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
            
            let newOrder;
            if(state.pizza[addedPizza.id]){
                //alreaady selected
                return state;
            }
            newOrder = PIZZA.find(item => item.id === addedPizza.id)
            const newPrice = (state.totalPrice - state.pizza.price) + newOrder.price
            return {
                ...state,
                pizza: newOrder,
                totalPrice: newPrice,
                toppings: []
            };
        case SELECT_SIZE :
            const addedSize = action.size
            let newSize;
            if(state.size[addedSize.id]){
                return state;
            }
            newSize = SIZE.find(item => item.id === addedSize.id)
            console.log(newSize)
            const newSizePrice = (state.totalPrice - state.size.price) + newSize.price
            return {
                ...state,
                size: newSize,
                totalPrice: newSizePrice
            };

        case SELECT_TOPPING : 
            const topping = action.topping;
            const toppingPrice = topping.price

            let updatedTopping=[...state.toppings];

            if(state.toppings.includes(topping.id)){
                //already in list will be removed
                //updatedTopping.filter(item => item.id !== topping.id)
                const index = updatedTopping.indexOf(topping.id)
                if(index>-1) updatedTopping.splice(index,1)
            }else{
                //not already in list
                updatedTopping = updatedTopping.concat(topping.id)
            }
            console.log(updatedTopping)
            return{
                ...state,
                toppings: updatedTopping
            };

    }
    return state;
};