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
        childChanger(4);
    }
    
    headerButtons.appendChild(homeButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(contactButton);
    header.appendChild(headerButtons);

    return header;
}
import home from './home';
function content(){
  
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  content.classList.add('content');
  return content;
}
function footer(){
  const footer = document.createElement('div');
  footer.textContent = 'nneddk';
  footer.classList.add('footer');
  return footer;
}

function childChanger(num){
  const currContent = document.getElementById('content');

  currContent.appendChild(home());
  console.log(currContent);
}

document.body.appendChild(header());
document.body.appendChild(content());
document.body.appendChild(footer());


//content updaters
