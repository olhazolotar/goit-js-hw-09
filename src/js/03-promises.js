import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(".form"),
}

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({position, delay});
            } else {
                reject({position, delay});
            }
        }, delay);
    });
}

function onFormSubmit(event) {
    event.preventDefault();

    let firstDelay = Number(refs.form.elements.delay.value);
    let delayStep = Number(refs.form.elements.step.value);
    let amount = Number(refs.form.elements.amount.value);

    let delay = firstDelay;
    
    for (let i = 1; i <= amount; i += 1) {
        let position = i;
        createPromise(position, delay)
            .then(({ position, delay }) => {
                Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        delay += delayStep;
    };    
}