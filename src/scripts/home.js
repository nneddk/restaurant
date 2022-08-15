import '../styles/home.css';
export default function home(){
    const home = document.createElement('div');
    home.classList.add('home')

    const homeIntro = document.createElement('div');
    homeIntro.classList.add('home-intro');
    homeIntro.textContent = 'Welcome to restaurant!'
    home.appendChild(homeIntro);

    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    schedule.textContent = '10:00 am - 10:00 pm'
    home.appendChild(schedule);

    return home;
}