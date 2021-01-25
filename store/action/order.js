export const SELECT_PIZZA = 'SELECT_PIZZA';
export const SELECT_SIZE = 'SELECT_SIZE';
export const SELECT_TOPPING = 'SELECT_TOPPING';

export const selectPizza = pizza =>{
    return {type : SELECT_PIZZA, pizza: pizza};
}

export const selectSize = size =>{
    return {type : SELECT_PIZZA, size: size};
}

export const selectTopping = toppingId =>{
    return {type: SELECT_TOPPING, tId:toppingId}
}

