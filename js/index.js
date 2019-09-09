// Your code goes here

const allNavItems = document.querySelectorAll('.nav-link');

allNavItems.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.color = "red";
    });
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

const button = document.querySelectorAll('.btn');

button.forEach((button) => {
    button.addEventListener('click', event => {
        button.innerHTML = `Click count: ${event.detail}`;
    });
});

const busImg = document.querySelector('img');

busImg.addEventListener('mouseenter', (event) => {
    busImg.style.transform = 'scale(1.2)';
    busImg.style.transition = 'transform 0.5s';
    
    busImg.addEventListener('mouseleave', (event) => {
        busImg.style.transform = 'scale(1.0)';
        busImg.style.transition = 'transform 0.5s';
    });
});

window.ononline = (event) => {
    console.log("You are now connected to the network.");

    window.onoffline = (event) => {
        console.log("The network connection has been lost.");
    };
};
