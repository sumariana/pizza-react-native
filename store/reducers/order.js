import { SELECT_PIZZA,SELECT_SIZE,SELECT_TOPPING } from '../action/order'
import PIZZA from '../../data/pizza-data';
import SIZE from '../../data/size-data';
import TOPPING from '../../data/topping-data';

const initialState = {
    pizza: {}, //pizza item
    size: {}, //size item
    toppings: [], //select topping
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
            const resetedToppings = [];
            return {
                ...state,
                pizza: newOrder,
                totalPrice: newPrice,
                toppings: resetedToppings
            };
        case SELECT_SIZE :
            const addedSize = action.size
            let newSize;
            if(state.size[addedSize.id]){
                return state;
            }
            newSize = SIZE.find(item => item.id === addedSize.id)
            const newSizePrice = (state.totalPrice - state.size.price) + newSize.price
            return {
                ...state,
                size: newSize,
                totalPrice: newSizePrice
            };

        case SELECT_TOPPING : 
            const toppingId = action.tId
            const latestTopping = [...state.toppings]
            let tPrice;
            toppingIndex = state.toppings.findIndex(item=>item.id===toppingId)
            if(!state.toppings.find(item=> item.id===toppingId)){
                //adding the topings to list
                tPrice = state.totalPrice + latestTopping[toppingIndex].price
                latestTopping.concat(latestTopping[toppingIndex])
            }else{
                //remove the topping from list
                tPrice=state.totalPrice - latestTopping[toppingIndex].price
                latestTopping.filter(
                    item => item.id !== toppingId
                );
            }
            return{
                ...state,
                toppings: latestTopping,
                totalPrice: tPrice
            };


    }
    return state;
};