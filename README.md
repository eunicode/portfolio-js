# Personal Portfolio

## Description

This website serves as an online portfolio by showcasing one's projects and has additional "about" and "contact" sections.  It is a project required by freeCodeCamp's _[Responsive Web Design](https://learn.freecodecamp.org/)_ curriculum. It fulfills the user stories listed [here](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage/).

## Demo

## Features 

- Fixed navbar
- First section takes up 100% of the viewport 
- Full bleed sections with constrained width content
- Mobile-first layout with progressive enhancement
- Responsive design with CSS Grid and media queries
- Programmatically added project tiles from data
- BEM class names

## Tech Stack

- HTML
- CSS
- JavaScript

## Lessons Learned

- Create a fixed navbar with set height with the `position` property
- Fixed position elements are out of flow, or not part of the normal document layout flow; it sits on its on own layer.
- `position: fixed` is similar to `position: absolute` except the offsets are based on the _viewport_, not the _containing block_ ([Source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)).
- Use `margin-top`, or create an empty row with set height to prevent the fixed position navbar from overlapping the in flow elements
- Use Flexbox to position navigation links on the horizontal axis
- Constrain width with a container and class
- The basic principles of BEM methodology
- Create a fixed navbar with flexible height by setting the height of the container's parent, setting `overflow: hidden` on the container, and `flex: auto` on the container's non-navbar section

## To-do

- Fixed navbar with flexible height without using `overflow` hack
- Refactor constrained-width content in full-bleed sections with CSS Grid
