export const SELECT_PIZZA = 'SELECT_PIZZA';
export const SELECT_SIZE = 'SELECT_SIZE';
export const SELECT_TOPPING = 'SELECT_TOPPING';

export const selectPizza = pizza =>{
    return {type : SELECT_PIZZA, pizza: pizza};
}

export const selectSize = size =>{
    return {type : SELECT_SIZE, size: size};
}

export const selectTopping = topping =>{
    return {type: SELECT_TOPPING, topping:topping};
}

