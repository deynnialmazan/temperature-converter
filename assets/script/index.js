'use strict';

const form = document.querySelector('form');
const number = document.querySelector('.temp');
const convert = document.querySelector('.convert');
const toFarenheit = document.querySelector('#toFarenheit');
const toCelsius = document.querySelector('#toCelsius');
const output = document.querySelector('.output p');
const outputBox = document.querySelector('.output');
const darkMode = document.querySelector('.darkmode');
const h2 = document.querySelector('h2');
const label = document.querySelector('.one');
const label2 = document.querySelector('.two');
const body = document.querySelector('body');
const fullName = document.querySelector('.name');


//Validating data

function isNumber(num) {
    if (num.length > 0 && !isNaN(num)) {
        return true;
    }
    return false;
}

convert.addEventListener('click', function() {
    let a = number.value.trim(); 

    if(isNumber(a)) {
        if (toFarenheit.checked) {
            let result = ((parseFloat(a) * 1.8 + 32)).toFixed(1);
            output.innerText = `${result}F`;
        } else if (toCelsius.checked) {
            let result = ((parseFloat(a) -32) * 5 / 9).toFixed(1);
            output.innerText = `${result}C`;}
    } else output.innerText = 'Please enter valid numbers';
});


//Change theme (Dark mode/ Light mode)

darkMode.addEventListener('click', function() {
   
    if (this.value === 'Dark mode') {
        body.style.backgroundColor = '#fbfbfb';
        h2.style.color = '#676767';
        label.style.color = '#676767';
        label2.style.color = '#676767';
        number.style.backgroundColor = '#d9d9d9';
        outputBox.style.backgroundColor = '#d9d9d9';
        output.style.color = '#676767';
        number.style.color = '#676767';
        fullName.style.color = '#676767';
        this.value = 'Light mode';
        } else {
        body.style.backgroundColor = '#1a1d28';
        h2.style.color = '#fff';
        label.style.color = '#fff';
        label2.style.color = '#fff';
        number.style.backgroundColor = 'rgb(255 255 255 / 0.1)';
        outputBox.style.backgroundColor = 'rgb(255 255 255 / 0.1)';
        output.style.color = '#fff';
        number.style.color = '#fff';
        this.value = 'Dark mode';
        fullName.style.color = '#fff';
    }
});





   