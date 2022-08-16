import '../styles/menu.css'
let foodArray = [];
class foodData{
    constructor(pic, name, price){
        this.pic = pic;
        this.name = name;
        this.price = price;
    }
}
import burger from '../pic/burger.png';
import egg from '../pic/egg.png';
import apples from '../pic/apples.png';
import salad from '../pic/salad.png';
import fry from '../pic/fry.png';
import chicken from '../pic/chicken.png';

foodArray.push(new foodData(burger, 'Burger', '$300'));
foodArray.push(new foodData(egg, 'Just Egg', '$500'));
foodArray.push(new foodData(apples, '2 Apples', '$100'));
foodArray.push(new foodData(salad, 'Maybe Salad', '$20'));
foodArray.push(new foodData(fry, 'French Fry', '$10'));
foodArray.push(new foodData(chicken, 'Alive Chicken', '$200'));

export default function menu(){
    let index = 0;
    let limit = foodArray.length;
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const foodDiv = document.createElement('div');
    foodDiv.classList.add('food-div');
    foodDiv.appendChild(foodCarousel(0));

    const leftBtn = document.createElement('button');
    leftBtn.classList.add('menu-btn');
    leftBtn.textContent = '<';
    leftBtn.onclick = function(){
        if(foodDiv.hasChildNodes()){
            foodDiv.removeChild(foodDiv.lastChild);
          }
        foodDiv.appendChild(foodCarousel((index+=limit - 1) % limit));
    }
    
    const rightBtn = document.createElement('button');
    rightBtn.classList.add('menu-btn');
    rightBtn.textContent = '>';
    rightBtn.onclick = function(){
        if(foodDiv.hasChildNodes()){
            foodDiv.removeChild(foodDiv.lastChild);
          }
        foodDiv.appendChild(foodCarousel(++index%limit));
    }
    menu.appendChild(leftBtn);
    menu.appendChild(foodDiv);
    menu.appendChild(rightBtn);

    return menu;
}

function foodCarousel(num){
    const food = document.createElement('div');
    food.classList.add('food');
    //add food pictures
    const foodpic = document.createElement('img');
    foodpic.classList.add('food-pic');
    foodpic.src = foodArray[num].pic;
    foodpic.width = '300';
    foodpic.height = '300';
    //add food name
    const foodname = document.createElement('div');
    foodname.classList.add('food-name');
    foodname.textContent = foodArray[num].name;
    //add food price
    const foodprice = document.createElement('div');
    foodprice.classList.add('food-price');
    foodprice.textContent = foodArray[num].price;
    //appends it to food div
    food.appendChild(foodpic);
    food.appendChild(foodname);
    food.appendChild(foodprice);

    return food;
}


