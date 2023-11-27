document.querySelectorAll('h1')

const premierFilsBody = document.body.firstElementChild;
premierFilsBody.textContent = 'Rick Astley - Never Gonna Give You Up';


const coupletElements = document.querySelectorAll('.couplet');
coupletElements.forEach(element => {
    const lignes = element.textContent.split('\n');
    if (lignes.length > 1 && lignes[0] === lignes[1]) {
        element.textContent = lignes.slice(1).join('\n');
    }
    
    element.innerHTML = element.innerHTML.replace(/<br\s*\/?>/gi, '');
});

const refrainElement = document.getElementById('refrain');
const refrainText = refrainElement.textContent;
const regex = new RegExp(refrainText, 'gi');
refrainElement.textContent = refrainText.replace(regex, '').trim();
refrainElement.innerHTML = refrainElement.innerHTML.replace(/<br\s*\/?>/gi, '');

const erreurElement = document.getElementById('erreur');
if (erreurElement) {
    erreurElement.remove();
}

const footerElement = document.createElement('footer');
footerElement.textContent = '© Copyright 2020 - Nom';
document.body.appendChild(footerElement);


