import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    button: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker')
}

refs.button.setAttribute('disabled', 'disabled');
let selectedData = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure("Please choose a date in the future");
    } else {
      selectedData = selectedDates[0].getTime();
    refs.button.removeAttribute('disabled'); 
    }
    
  },
};

flatpickr('#datetime-picker', options);

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  intervalId = setInterval(countdown, 1000);
  refs.input.setAttribute('disabled', 'disabled');
  refs.button.setAttribute('disabled', 'disabled');
}

function countdown() {
  let delta = selectedData - Date.now();

  if (delta > 0) {
    const { days, hours, minutes, seconds } = convertMs(delta);
      
    refs.days.textContent = addLeadingZero(`${days}`);
    refs.hours.textContent = addLeadingZero(`${hours}`);
    refs.minutes.textContent = addLeadingZero(`${minutes}`);
    refs.seconds.textContent = addLeadingZero(`${seconds}`);
  } else { 
clearInterval(intervalId);
  }
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
  
