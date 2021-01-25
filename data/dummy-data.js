import Pizza from '../model/pizzaModel';
import Size from '../model/sizeModel';
import Topping from '../model/toppingModel';

const PIZZA = [
    new Pizza(
        '1',
        8,
        'Pizza 1',
        'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800'
    ),
    new Pizza(
        '2',
        10,
        'Pizza 2',
        'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png'
    ),
    new Pizza(
        '3',
        12,
        'pizza 3',
        'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg'
    )
];

const SIZE = [
    new Size(
        '1',
        'small',
        -1,
        1
    ),
    new Size(
        '2',
        'medium',
        0,
        2
    ),
    new Size(
        '3',
        'large',
        2,
        3
    )
];

const TOPPING = [
    new Topping(
        '1',
        'Avocado',
        1,
        ['1'],
        true
    ),
    new Topping(
        '2',
        'Brocolli',
        1,
        ['1','2','3'],
        true
    ),
    new Topping(
        '3',
        'Onions',
        1,
        ['1','2','3'],
        true
    ),
    new Topping(
        '4',
        'Zucchini',
        1,
        ['1','2','3'],
        true
    ),
    new Topping(
        '5',
        'Lobster',
        2,
        ['2'],
        true
    ),
    new Topping(
        '6',
        'Oyster',
        2,
        ['2'],
        true
    ),
    new Topping(
        '7',
        'Salmon',
        2,
        ['2'],
        true
    ),
    new Topping(
        '8',
        'Tuna',
        2,
        ['1','3'],
        true
    ),
    new Topping(
        '9',
        'Bacon',
        3,
        ['2','3'],
        true
    ),
    new Topping(
        '10',
        'Duck',
        3,
        ['3'],
        true
    ),
    new Topping(
        '11',
        'Ham',
        3,
        ['1','2','3'],
        true
    ),
    new Topping(
        '1',
        'Sausage',
        3,
        ['3',],
        true
    )
];
//export default SIZE;
export default PIZZA;
//export default TOPPING;