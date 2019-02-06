// console.log(`Hi, JS is working`);

const projectTitles_Group = ['Turtles Tab', 'Momentum Dash Clone', 'Pic Scavenger'];

const projectImages_Group = ['turtles-tab', 'momentum-dash', 'pic-scavenger'];

const projectTitles_Indiv = ['ES6 Technical Documentation', 'Twitch Tracker', 'Survey Form'];

const projectImages_Indiv = ['es6-docs', 'twitch-tracker', 'survey-form'];

function keepTrackOfH3() {
  let countCalls = 0;

  const h3AnchorAll = document.querySelectorAll('.projects');

  function inner(titles, imageLinks) {
    const countIdx = countCalls;
    const h3Anchor = h3AnchorAll[countIdx];

    const container = document.createElement('div');
    container.className = 'container';
    h3Anchor.after(container);

    for (let i = 0; i < titles.length; i++) {
      const projectTile = document.createElement('div');
      projectTile.className = 'project-tile';
      container.appendChild(projectTile);

      const projectImage = document.createElement('img');
      projectImage.className = 'project-image';
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
*/

// NOTES
/*
CLOSURE
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/cycleIterator.js
https://github.com/eunicode/algos/blob/master/csx/closure-scope-excon/censor.js

*/