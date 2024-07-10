// Code here!
// 1. Byt namn på första hoodien från Ash till Potato.
let firstHoodieName = document.querySelector('.art-1 h3')
firstHoodieName.innerText = 'Potato';


// 2. Byt namn på Home till Start.
let homeLink = document.querySelector('nav a:first-child');
homeLink.innerText = 'Start';


// 3. Byt namn på Contact till Mail Us.

let contactLink = document.querySelector('nav a:nth-of-type(3)');
console.log(contactLink);
contactLink.innerText = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.

let fireHoodieArticle = document.querySelector('.art-2');
fireHoodieArticle.querySelector('h2').innerText = 'Sinus Hoodie';
fireHoodieArticle.querySelector('h3').innerText = 'Fire';
fireHoodieArticle.querySelector('p').innerText = 'New description for Sinus Hoodie-Fire.';


// 5. Byt bakgrundsfärg och text på en knapp.

let buttonToChange = document.querySelector('.art-1 button');
buttonToChange.style.backgroundColor = 'orange'; 
buttonToChange.innerText = 'Select'; 


// 6. Byt bakgrundsfärg på någon av produkterna.

let changeBackground = document.querySelector('.art-3');
changeBackground.style.backgroundColor = 'lightgreen'; 


// 7. Byt ut adressen på sidan.

let addressSection = document.querySelector('footer section article:nth-of-type(2) p');
addressSection.innerHTML = `Sinus skateboards <br> Some Street <br> 2222, Some town`;


// 8. Byt färg på samtliga <p>.
let newParagraphsColor = document.querySelectorAll('p');
console.log(newParagraphsColor);
newParagraphsColor.forEach(p => {
    p.style.color = 'magenta'; 
});