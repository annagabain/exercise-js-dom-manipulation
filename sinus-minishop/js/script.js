// Code here!
// 1. Byt namn på första hoodien från Ash till Potato.
let firstHoodieNameRef = document.querySelector('.art-1 h3')
firstHoodieNameRef.innerText = 'Potato';


// 2. Byt namn på Home till Start.
let homeLinkRef = document.querySelector('nav a:first-child');
homeLinkRef.innerText = 'Start';


// 3. Byt namn på Contact till Mail Us.

let contactLinkRef = document.querySelector('nav a:nth-of-type(3)');
console.log(contactLinkRef);
contactLinkRef.innerText = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.

let fireHoodieArticleRef = document.querySelector('.art-2');
fireHoodieArticleRef.querySelector('h2').innerText = 'Sinus Hoodie';
fireHoodieArticleRef.querySelector('h3').innerText = 'Fire';
fireHoodieArticleRef.querySelector('p').innerText = 'New description for Sinus Hoodie-Fire.';


// 5. Byt bakgrundsfärg och text på en knapp.

let buttonToChangeRef = document.querySelector('.art-1 button');
buttonToChangeRef.style.backgroundColor = 'orange'; 
buttonToChangeRef.innerText = 'Select'; 


// 6. Byt bakgrundsfärg på någon av produkterna.

let changeBackgroundRef = document.querySelector('.art-3');
changeBackgroundRef.style.backgroundColor = 'lightgreen'; 


// 7. Byt ut adressen på sidan.

let addressSectionRef = document.querySelector('footer section article:nth-of-type(2) p');
addressSectionRef.innerHTML = `Sinus skateboards <br> Some Street <br> 2222, Some town`;


// 8. Byt färg på samtliga <p>.
let newParagraphsColorRef = document.querySelectorAll('p');
console.log(newParagraphsColorRef);
newParagraphsColorRef.forEach(p => {
    p.style.color = 'magenta'; 
});