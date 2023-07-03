// Import stylesheets
import './style.css';

// Write Javascript code!

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const sleepWithSetTimeout = (num, callback) => {
  const start = Date.now();
  setTimeout(() => {
    callback(new Date(start).getSeconds(), num);
  }, num * 1000);
};

const setTimeOutCallbackFunction = (start, index) => {
  const numIsPrime = isPrime(index);
  console.log('Prime :', index, numIsPrime, start, new Date().getSeconds());
};

const syncWithSetTimeout = () => {
  for (let index = 0; index < 10; index++) {
    console.log('Sleeping: ', index, new Date().getSeconds());
    sleepWithSetTimeout(index, setTimeOutCallbackFunction);
  }

  console.log('done!');
};

syncWithSetTimeout();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Learn MERN Stack</h1>`;
