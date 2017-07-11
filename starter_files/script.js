let portfolioData = [
    {
        img : "img/boat.jpg",
        h2 : "Boats"
    },
    {
        img : "img/hair.jpg",
        h2 : "Hair Styles"
    },
    {
        img : "img/shirts.jpg",
        h2 : "t Shirts"
    },
    {
        img : "img/dirt.jpg",
        h2 : "Dirt"
    }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/
let hero = document.querySelector("#hero");

let herotitle = document.createElement ( "h1" );
let herotext = document.createElement ("p");

hero.appendChild(herotitle);
hero.appendChild(herotext);

let herotitletext = document.createTextNode ("ACME Design Studio");
let heroptext = document.createTextNode ("We are dedicated to producing the best designs in the world.");

herotitle.appendChild(herotitletext);
hero.appendChild(heroptext);




/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/

// 2. Add Content to the portfolio Section.
// The unordered list should contain four li tags, all of which should contain an img tag and an h2 tag. Dynamically add all of the content to the unordered list using DOM manipulation.
//
// To complete this task, iterate over the portfolioData array and parse the objects to construct the HTML elements. Add content to them and then append them to the unordered list inside the section with an id of portfolio.

let portfolio = document.querySelector('#portfolio ul');

for (let i = 0; i < portfolioData.length; i++) {

let li = document.createElement("li");
let liimage = document.createElement("img");
let lih2 = document.createElement("h2");
let lih2text = document.createTextNode(portfolioData[i].h2);

liimage.setAttribute ("src", portfolioData[i].img);

li.appendChild (liimage);
lih2.appendChild (lih2text);
li.appendChild (lih2);
portfolio.appendChild (li);
}

/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/

let dropdown = document.querySelector("#dropdown");
let nav = document.querySelector("#main_navigation");

// function visible(){
//   if (dropdown.style.visibility === "hidden") {
//     dropdown.style.visibility = "visible"
//   }
//   else {
//     dropdown.style.visibility = "hidden"
//   }
// }

function visible(){
  nav.classList.toggle("visible");
}

dropdown.addEventListener("click", visible)

// The eventlistener is for the dropdown button but
// the button is inside of the nav bar
