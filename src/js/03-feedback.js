const throttle = require('lodash.throttle');

const ref = {
    form: document.querySelector('.feedback-form'),
}
const LOCAL_FEEDBACK_KEY = 'feedback-form-state';
const feedBackStorage = localStorage.getItem(LOCAL_FEEDBACK_KEY);

checkInputForm(feedBackStorage);
ref.form.addEventListener('input', throttle(onHandleFormInput, 500));
ref.form.addEventListener('submit', onHandleSubmitForm);


function onHandleFormInput(e) {
    const feedBack = {
        email: ref.form.email.value,
        message: ref.form.message.value,
    }
    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify(feedBack));
}

function checkInputForm(feedBackStorage) {
    if (feedBackStorage) {
        const feedBack = JSON.parse(feedBackStorage);
        ref.form.email.value = feedBack.email;
        ref.form.message.value = feedBack.message;
    }
}

function onHandleSubmitForm(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCAL_FEEDBACK_KEY)));

    localStorage.removeItem(LOCAL_FEEDBACK_KEY);
    e.target.reset();
}