const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const loading = document.querySelector('.box');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const span4 = document.querySelector('#span4');
const mail = document.querySelector('#mail');
const phone = document.querySelector('#phone');



const pip = /(^[ІЇА-Я][іїа-я]+ [ІЇА-Я][іїа-я]+ [ІЇА-Я][іїа-я])|(^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]{1,})+$/;
const passwordLog = /.{4,}/;
const mailLog = /\w{5,}\@\w{1,}\./;
const phoneValue = /\+\d{2}\(\d{3}\)\d{7}/;


email.addEventListener("input", (event) => {
    const logPip = event.target.value;
    const resultPip = pip.test(logPip);
    console.log(event.target.value);

    if (!resultPip) {
        span1.textContent = "Invalid";
    } else {
        span1.textContent = "Valid";
    };
});

password.addEventListener("input", (event) => {
    const getPassword = event.target.value;
    const resultPassword = passwordLog.test(getPassword);
    console.log(event.target.value);

    if (!resultPassword) {
        span2.textContent = "Invalid";
    } else {
        span2.textContent = "Valid";
    };
});

mail.addEventListener("input", (event) => {
    const getMail = event.target.value;
    const resultMail = mailLog.test(getMail);
    console.log(event.target.value);

    if (!resultMail) {
        span3.textContent = "Invalid";
    } else {
        span3.textContent = "Valid";
    };
});

phone.addEventListener("input", (event) => {
    const getPhone = event.target.value;
    const resultPhone = phoneValue.test(getPhone);
    console.log(event.target.value);

    if (!resultPhone) {
        span4.textContent = "Invalid";
    } else {
        span4.textContent = "Valid";
    };
});



let getNum = '';
email.addEventListener('click', getN);
function getN() {
    password.addEventListener('click', getA) || login.addEventListener('click', getA);
    function getA() {
        getNum = document.getElementById('email').value;
        console.log(getNum);
    };
};

let getNum1 = '';
password.addEventListener('click', getEl);
function getEl() {
    login.addEventListener('click', getA) || email.addEventListener('click', getA);
    function getA() {
        getNum1 = document.getElementById('password').value;
        console.log(getNum1);
    };
};

loading.style.display = 'none';
login.addEventListener('click', getEnter);
function getEnter() {
    setTimeout(getOut, 2000);
    loading.style.display = 'block';
    function getOut() {
        if (!getNum || !getNum1) {
            alert('Введите данные');
            loading.style.display = 'none';
        } else {
            location.replace('index2.html');
        };
    };
};



