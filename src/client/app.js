import Dog from '../shared/dog';

const browserBuddy = new Dog('Browser Buddy');
document.querySelector('.app').innerText = browserBuddy.bark();
