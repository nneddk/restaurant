import '../styles/home.css';
export default function home(){
    const home = document.createElement('div');
    home.classList.add('home')

    const homeSideA = document.createElement('div');
    homeSideA.classList.add('home-a');
    home.appendChild(homeSideA);

    const homeIntro = document.createElement('div');
    homeIntro.classList.add('home-intro');
    homeIntro.textContent = 'Welcome to restaurant!'
    homeSideA.appendChild(homeIntro);

    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    schedule.textContent = '10:00 am - 10:00 pm'
    homeSideA.appendChild(schedule);

    const homeSideB = document.createElement('div');
    homeSideB.classList.add('home-b');
    home.appendChild(homeSideB);
    //animated floating circles for side b

    const animatedList = document.createElement('ul');
    animatedList.classList.add('shapes');
    for(let i = 0; i<10; i++){
        const shapeDiv = document.createElement('li');
        animatedList.appendChild(shapeDiv);
    }

    homeSideB.appendChild(animatedList);
    return home;
}