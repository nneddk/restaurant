import '../styles/index.css';

function header() {
    const header = document.createElement('div');
    header.textContent = 'restaurant';
    header.classList.add('header');
    //buttons for switching dom elements
    const headerButtons  = document.createElement('div');
    headerButtons.classList.add('header-buttons-holder')
  
    const homeButton = document.createElement('button');
    homeButton.textContent = 'home';
    homeButton.classList.add('header-button');
    homeButton.onclick = function(){
        childChanger(1);
    }
  
    const menuButton = document.createElement('button');
    menuButton.textContent = 'menu';
    menuButton.classList.add('header-button');
    menuButton.onclick = function(){
        childChanger(2);
    }
  
    const contactButton = document.createElement('button');
    contactButton.textContent = 'contact us';
    contactButton.classList.add('header-button');
    contactButton.onclick = function(){
        childChanger(3);
    }
    
    headerButtons.appendChild(homeButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(contactButton);
    header.appendChild(headerButtons);

    return header;
}

function content(){
  
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('content');
  content.appendChild(menu());
  return content;
}
function footer(){
  const footer = document.createElement('div');
  footer.textContent = 'nneddk';
  footer.classList.add('footer');
  return footer;
}
import home from './home';
import contact from './contact';
import menu from './menu';

function childChanger(num){
  const currContent = document.getElementById('content');
  if(currContent.hasChildNodes()){
    currContent.removeChild(currContent.lastChild);
  }
  switch (num){
    case 1:
      currContent.appendChild(home());
      break;
    case 2:
      currContent.appendChild(menu());
      break;
    case 3:
      currContent.appendChild(contact());
      break;
    default:
      alert('Error! page not found!');
      break;
  }
  
}

document.body.appendChild(header());
document.body.appendChild(content());
document.body.appendChild(footer());


//content updaters
