# Assignment 2 - Automated development process.

Name: Conor McBride

Student No.:  20063017

## Overview.
The application pushes up to github,travis and passes to heroku, I have the build set up but not production. There is also build automation.
Full acceptance testing.
.

## Environment.
mongodb
node v6.11.3
git but you can only work out of the workingbranch because the master branch is broken
I had to roll back my code and had to work from there as I couldn't fix the master including the merge.
Travis working
https://github.com/conormcbride/barmang/tree/workingbranch

I wourked out of webstorm but I'm not sure if that is needed here

## Build automation.
npm run build
npm run build:dev
npm test
mongod in the right file
mocha test/acceptance runs all of the tests
List precisely the sequence of steps (i.e. terminal commands) required to build,
test (Acceptance test) and run the complete app locally - what NPM scripts (and other scripts) to execute.

## Acceptance Testing.

 (2) C:\Users\conor\WebstormProjects\barmangV2\test\acceptance
 (3) C:\Users\conor\WebstormProjects\barmangV2>mocha test/acceptance


  add Bar Page

DevTools listening on ws://127.0.0.1:12915/devtools/browser/68e9e850-bb4f-445a-9e20-466916e2849a
[10864:6404:1213/075737.819:ERROR:shader_disk_cache.cc(238)] Failed to create shader cache entry: -2
    √ shows the nav bar on Add Bar Page (86ms)
    √ shows the main header (161ms)
    √ accepts a new bar and displays in list (2346ms)

  add Staff Page

DevTools listening on ws://127.0.0.1:12833/devtools/browser/0bdaaa1d-e0ca-4dac-a1a2-e31bec7a292a
    √ shows the nav bar on Add staff Page (54ms)
    √ shows the main header (201ms)
    √ accepts a new staff and displays in list (2451ms)

  Home page

DevTools listening on ws://127.0.0.1:12188/devtools/browser/4858dfd7-07e8-4482-b497-b918f32cbda7
    √ shows the main body (77ms)
    √ shows the nav bar
    √ shows the buttons (224ms)
    √ shows the main image (132ms)

  Bar List page

DevTools listening on ws://127.0.0.1:12044/devtools/browser/17686ae7-421c-4298-9b11-7862926c06d3
    √ shows the main header (118ms)
    √ displays the bars (188ms)

  Staff List page

DevTools listening on ws://127.0.0.1:12585/devtools/browser/55619a64-c7a8-4e3f-b294-e2b0dfe62d00
    √ shows the main header (320ms)
    √ displays the Staff members (236ms)


  14 passing (1m)



## Continuous Integration.
https://travis-ci.org/conormcbride/barmang
git but you can only work out of the workingbranch because the master branch is broken !!!!!!!!!!!

## Automated Deployment.
https://barmang.herokuapp.com/
git but you can only work out of the workingbranch because the master branch is broken !!!!!!!!!!!

I push to heroku from github not travis as I couldn't get travis to work
