const elementsRed = document.querySelectorAll('.red');
elementsRed.forEach(element => {
    element.classList.remove('red');
});


const refrainElements = document.querySelectorAll('.refrain');
refrainElements.forEach(element => {
    element.style.fontStyle = 'italic';
});


const blueElements = document.querySelectorAll('.blue');
blueElements.forEach(element => {
    element.style.color = '#8A2BE2';
});


