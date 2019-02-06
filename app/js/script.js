// console.log(`Hi, JS is working`);

// Group Projects

const projectTitles_Group = ['Turtles Tab', 'Momentum Dash Clone', 'Pic Scavenger'];

const projectImages_Group = ['turtles-tab', 'momentum-dash', 'pic-scavenger'];

projectGithub_Group = [];

projectDemos_Group = [];

// Individual Projects

const projectTitles_Indiv = ['ES6 Technical Documentation', 'Twitch Tracker', 'Survey Form'];

const projectImages_Indiv = ['es6-docs', 'twitch-tracker', 'survey-form'];

const projectGithub_Indiv = [];

projectDemos_Indiv = [];

function keepTrackOfH3() {
  // Keep track of how many times `inner` fxn is called with closure
  let countCalls = 0;

  const h3AnchorAll = document.querySelectorAll('.projects__header');

  function inner(titles, imageLinks) {
    // The first call attaches the generated section to first h3, and so forth
    const countIdx = countCalls;
    const h3Anchor = h3AnchorAll[countIdx];

    const container = document.createElement('div');
    container.className = 'projects__tile-container';
    h3Anchor.after(container);

    for (let i = 0; i < titles.length; i++) {
      const projectTile = document.createElement('div');
      projectTile.className = 'projects__tile';
      container.appendChild(projectTile);

      const projectImage = document.createElement('img');
      projectImage.className = 'projects__tile-image';
      projectImage.src = `./images/${imageLinks[i]}.png`
      projectImage.alt = titles[i];
      projectTile.appendChild(projectImage);

      const projectLink = document.createElement('a');
      projectLink.href = `https://github.com/eunicode`;
      projectLink.textContent = titles[i];
      projectTile.appendChild(projectLink);
    }

    countCalls += 1;
  }

  return inner;
}

const generateTiles = keepTrackOfH3();

// Attach DOM elements to first h3
generateTiles(projectTitles_Group, projectImages_Group);

// Attach DOM elements to second h3
generateTiles(projectTitles_Indiv, projectImages_Indiv);

// TO DO
/* 
Minify/optimize images with gulp

BEM CSS class names

Create production version
public - index.html 
src - js, css
build - copy everything into build
Whenever there's a change in the files, we re-process, re-copy, and re-load.
The files served in development and production will be the build folder.

Get rid of global variables
Package into object
*/

// NOTES
/*
CLOSURE
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/cycleIterator.js
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/censor.js

*/

// LESSONS LEARNED
/*
How TO - Fixed Menu
https://www.w3schools.com/howto/howto_css_fixed_menu.asp

How TO - Sticky/Affix Navbar
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

How TO - On Scroll Header
https://www.w3schools.com/howto/howto_js_sticky_header.asp

Treehouse CSS Grid - Practice Flexible Grid Layout

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
*/