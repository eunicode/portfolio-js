ERROR: `Access to script at 'file:///Users/eunice/github/boilerplate-gulp-basic/app/js/script.js' from origin 'null' has been blocked by CORS policy: The response is invalid.`

ES6 module support in Chrome 62/Chrome Canary 64, does not work locally, CORS error<br>
https://stackoverflow.com/questions/46992463/es6-module-support-in-chrome-62-chrome-canary-64-does-not-work-locally-cors-er?rq=1

2017
Unlike regular scripts, ES6 modules are subject to same-origin policy. 
This means that you cannot import them from the file system or cross-origin without a CORS header (which cannot be set for local files).

Basically you need to run this code from a (local) server or disable same-origin in the browser for testing (do not do this permanently). 

---

Access to Image from origin 'null' has been blocked by CORS policy<br>
https://stackoverflow.com/questions/41965066/access-to-image-from-origin-null-has-been-blocked-by-cors-policy

---

Installing packages locally

- `npm init` - Creates package.json file
- `npm init --y` - Quicker method

devDependencies<br>
- `npm install --save-dev browser-sync gh-pages gulp@next`
- `npm i -S <package name>`

dependencies<br>
- `npm install --save <package name>`
- `npm i -D <package name>`

---

GULP

Error: File not found with singular glob: /node_modules/normalize.css/normalize.css (if this was purposeful, use `allowEmpty` option)

I tried to use gulp to copy and paste the node_modules normalize.css file into css folder. It didn't work when I used absolute file paths, but it worked when I used relative file paths. 

Didn't work: '/node_modules/normalize.css/normalize.css'

Did work: './node_modules/normalize.css/normalize.css'