// Your code goes here
const firstNavItem = document.querySelector('.nav-link');
firstNavItem.addEventListener('mouseover', (event) => {
    event.target.style.color = "red";
});

// const allNavItems = document.querySelectorAll('.nav-link');
// allNavItems.forEach((items) => {
//     items.addEventListener('mouseorver', textColor);
// });

// function textColor(event) {
//     event.target.style.color = "red";
// }

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    button.innerHTML = `Click count: ${event.detail}`;
});