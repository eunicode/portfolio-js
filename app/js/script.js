// console.log(`Hi, JS is working`);

// Group Projects
const projGroup = {
  titles: ["Turtles Tab", "Momentum Dash Clone", "Pic Scavenger"],
  images: ["turtles-tab", "momentum-dash", "pic-scavenger"],
  github: [
    "https://github.com/eunicode/Voyage2-Turtles-11",
    "https://github.com/krittiyaclark/Momentumdash",
    "https://github.com/teamjake2018/jake"
  ],
  demos: []
};

// Individual Projects
const projInd = {
  titles: ["ES6 Technical Documentation", "Twitch Tracker", "Survey Form"],
  images: ["es6-docs", "twitch-tracker", "survey-form"],
  github: [
    "https://github.com/eunicode/tech-doc",
    "https://github.com/eunicode/twitch-status",
    "https://github.com/eunicode/survey-form"
  ],
  demos: []
};

function keepTrackOfH3() {
  // Keep track of how many times `inner` fxn is called with closure
  let countCalls = 0;

  const h3AnchorAll = document.querySelectorAll(".projects__header"); //

  function inner(tileData) {
    // The first call attaches the generated section to first h3, and so forth
    const countIdx = countCalls;
    const h3Anchor = h3AnchorAll[countIdx];

    const container = document.createElement("div");
    container.className = "projects__tile-container";
    h3Anchor.after(container);

    for (let i = 0; i < tileData.titles.length; i++) {
      // Create tile, and append to tile-container
      const projectTile = document.createElement("div");
      projectTile.className = "projects__tile";
      container.appendChild(projectTile);

      // Create tile-image, and append to tile
      const projectImage = document.createElement("img");
      projectImage.className = "projects__tile-image";
      projectImage.src = `./images/${tileData.images[i]}.png`;
      projectImage.alt = tileData.titles[i];
      projectTile.appendChild(projectImage);

      // Create tile-link, and append to tile
      const projectLink = document.createElement("a");
      projectLink.href = tileData.github[i];
      projectLink.textContent = tileData.titles[i];
      projectTile.appendChild(projectLink);
    }

    countCalls += 1;
  }

  return inner;
}

// keepTrackOfH3 returns a function with a closure over a counter variable
const generateTiles = keepTrackOfH3();

// Attach DOM elements to first h3
generateTiles(projGroup);

// Attach DOM elements to second h3
generateTiles(projInd);

/* =================================================================  
  TO DO
================================================================= */

/* 
Minify/optimize images with gulp

✔ BEM CSS class names

Create production version
public - index.html 
src - js, css
build - copy everything into build
Whenever there's a change in the files, we re-process, re-copy, and re-load.
The files served in development and production will be the build folder.

Get rid of global variables
Package into object

Create a React version
*/

/* =================================================================  
  NOTES
================================================================= */

/*
CLOSURE
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/cycleIterator.js
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/censor.js

*/

/* =================================================================  
  LESSONS LEARNED
================================================================= */

/*
How TO - Fixed Menu
https://www.w3schools.com/howto/howto_css_fixed_menu.asp

How TO - Sticky/Affix Navbar
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

How TO - On Scroll Header
https://www.w3schools.com/howto/howto_js_sticky_header.asp

--------------------------------------------------------------------
Treehouse CSS Grid - Practice Flexible Grid Layout
Treehouse CSS Grid Layout - 3.6. Using Grid with Flexbox

--------------------------------------------------------------------
BEM

BEM Quick Start
https://en.bem.info/methodology/quick-start/#should-i-create-a-block-or-an-element

Wrong
projects__tile__image

Alternative #1
projects__tile
projects__tile-image

Alternative #2 Create a new block
projects-tile
projects-tile__image

--------------------------------------------------------------------
Fixed navbar with fixed height with Grid
Fixed navbar with flexible height with Flexbox
Con: Since the main container is a Flex container, it can't be a grid container. 
*/
