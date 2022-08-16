import '../styles/menu.css'
let foodArray = [];
class foodData{
    constructor(pic, name, price){
        this.pic = pic;
        this.name = name;
        this.price = price;
    }
}

foodArray.push(new foodData('pic link', 'Burger', '$300'));
foodArray.push(new foodData('pic link', 'Just Egg', '$500'));
foodArray.push(new foodData('pic link', '2 Apples', '$100'));
foodArray.push(new foodData('pic link', 'Maybe Salad', '$20'));
foodArray.push(new foodData('pic link', 'Milk', '$10'));
foodArray.push(new foodData('pic link', 'Alive Chicken', '$200'));

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

    /*
    setInterval(() => {
        if(foodDiv.hasChildNodes()){
            foodDiv.removeChild(foodDiv.lastChild);
          }
        foodDiv.appendChild(foodCarousel(++index%6));
    }, 10000);
    */
    

    menu.appendChild(leftBtn);
    menu.appendChild(foodDiv);
    menu.appendChild(rightBtn);

    return menu;
}

function foodCarousel(num){
    const food = document.createElement('div');
    food.classList.add('food');

    const foodpic = document.createElement('div');
    foodpic.classList.add('food-pic');
    foodpic.textContent = foodArray[num].pic;

    const foodname = document.createElement('div');
    foodname.classList.add('food-name');
    foodname.textContent = foodArray[num].name;

    const foodprice = document.createElement('div');
    foodprice.classList.add('food-price');
    foodprice.textContent = foodArray[num].price;

    food.appendChild(foodpic);
    food.appendChild(foodname);
    food.appendChild(foodprice);

    return food;
}


