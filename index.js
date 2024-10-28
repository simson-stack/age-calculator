const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const submitButton = document.getElementById('submit');

const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');

dayInput.addEventListener('input', () => {
    if(dayInput.value < 0){
        dayInput.value = dayInput.value.slice(1, 1);
    }
    dayInput.value = dayInput.value.slice(0, 2);
    if(dayInput.value > 32) {
        dayInput.value = '';
        alert('enter valid day');
    }
})

monthInput.addEventListener('input', () => {
    if(monthInput.value < 0){
        monthInput.value = monthInput.value.slice(1, 1);
    }
    monthInput.value = monthInput.value.slice(0, 2);
    if(monthInput.value > 12) {
        monthInput.value = '';
        alert('enter valid month');
    }
})

yearInput.addEventListener('input', () => {
    if(yearInput.value < 0){
        yearInput.value = yearInput.value.slice(1, 1);
    }
    yearInput.value = yearInput.value.slice(0, 4);
    if(yearInput.value > 2024) {
        yearInput.value = '';
        alert('enter valid day');
    }
})

submitButton.addEventListener('click', () => {
    let calculate = true;
   if(dayInput.value === '' || dayInput.value === '0') {
        dayError.style.display = 'block';
        calculate = false;
   }
   else dayError.style.display = 'none';

   if(monthInput.value === '' || monthInput.value === '0'){
        monthError.style.display = 'block';
        calculate = false;
   }
   else monthError.style.display = 'none';

   if(yearInput.value === '' || yearInput.value === '0') {
        yearError.style.display = 'block';
        calculate = false;
   }
   else yearError.style.display = 'none';

   if (calculate) {
    const currentDate = new Date();
    const year = Number(currentDate.getFullYear());
    const month = Number(currentDate.getUTCMonth()+1);
    const day = Number(currentDate.getDate());
    
    const inputDate = new Date (yearInput.value, monthInput.value, dayInput.value);
    const today = new Date (year, month, day);

    let years = today.getFullYear() - inputDate.getFullYear();
    let months = today.getMonth() - inputDate.getMonth();
    let days = today.getDate() - inputDate.getDate();
    console.log(years, months, days);

    if(years < 0 || months < 0 || days < 0){
        calculate = false;
        dayInput.value = dayInput.value.slice(0, 0);
        monthInput.value = monthInput.value.slice(0, 0);
        yearInput.value = yearInput.value.slice(0, 0);
        alert('Enter valid date');
    }
    if(!calculate) {
        return 0;
    }
    else {
        const yearOut = document.querySelector('.year-output');
        const monthOut = document.querySelector('.month-output');
        const dayOut = document.querySelector('.day-output');
        yearOut.textContent = years;
        monthOut.textContent = months;
        dayOut.textContent = days;

    }
   }

})