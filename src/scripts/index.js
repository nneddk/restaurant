import '../styles/index.css';


function header() {
  const header = document.createElement('div');
  header.textContent = 'restaurant';
  header.classList.add('header');
  //buttons for switching dom elements

  const contactButton = document.createElement('button');
  contactButton.textContent = 'contact';
  contactButton.classList.add('header-button');

  header.appendChild(contactButton);
  return header;

}
document.body.appendChild(header());
