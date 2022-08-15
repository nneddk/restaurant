import '../styles/contact.css';
export default function contact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    aboutUs.textContent = 'Contact us'

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = '555-555-5555'

    const email = document.createElement('div');
    email.classList.add('description');
    email.textContent = 'restaurant@email.com';


    contact.appendChild(aboutUs);
    contact.appendChild(description);
    contact.appendChild(email);

    return contact;
}