// Selected Element value and btn 
const value = document.getElementById('value');
const btnAll = document.querySelectorAll('.btn');
// console.log(value, btnAll);
// initial value 
let count = 0;
// Handle Event listener
btnAll.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click', event => {
        const currentBtn = event.currentTarget;
        if (currentBtn.classList.contains('decrease')) {
            count--;
        } else if (currentBtn.classList.contains('increase')) {
            count++;
        } else {
            count = 0;
        };

        // Set color styles increase decrease
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count === 0) {
            value.style.color = 'black'
        };
        value.textContent = count;
    });


})