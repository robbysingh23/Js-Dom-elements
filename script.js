// Begin the assignment
const appDiv = document.getElementById('app');

// First div container
const containerDiv = document.createElement('div');
containerDiv.className = "container";
appDiv.appendChild(containerDiv);

// nav-bar within the container div
const nav = document.createElement('nav');
containerDiv.appendChild(nav);

// ul with a class of "navs"
const unOrderedList = document.createElement('ul');
unOrderedList.className = "navs";
nav.appendChild(unOrderedList);

// Creating the Li's
const oneLi = document.createElement('li');
oneLi.innerText = "Locations";
unOrderedList.appendChild(oneLi);
const twoLi = document.createElement('li');
twoLi.innerText = "Pricing";
unOrderedList.appendChild(twoLi);
const threeLi = document.createElement('li');
threeLi.innerText = "Contact Us";
unOrderedList.appendChild(threeLi);

// Second div with the class of avatar
const avatarDiv = document.createElement('div');
avatarDiv.className = "avatar";
nav.appendChild(avatarDiv);
const avatarPic = document.createElement('img');
avatarPic.src = "https://picsum.photos/id/64/300/400";
avatarDiv.appendChild(avatarPic);

// Second img, the norway image
const mainImage = document.createElement('img');
mainImage.src = "https://picsum.photos/id/1015/320/568";
containerDiv.appendChild(mainImage);

// Div with the textcontainer
const textContainer = document.createElement('div');
textContainer.className = "text-container";
containerDiv.appendChild(textContainer);

// h1 and p tags within the text-container class
const headerOne = document.createElement('h1');
headerOne.innerText = "Norway is Calling";
const paragraphOne = document.createElement('p');
paragraphOne.innerText = "Book Now";

textContainer.appendChild(headerOne);
textContainer.appendChild(paragraphOne);

// Footer Div + paragraph
const footer = document.createElement('footer');
containerDiv.appendChild(footer);
const footerParagraph = document.createElement('p');
footerParagraph.innerText = "Private Policy";
footer.appendChild(footerParagraph);