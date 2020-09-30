<h1 align="center">Scrooge</h1>
<p align="center">
  <img src="https://badge.fury.io/js/scroooge.svg"> &nbsp; 
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"> &nbsp; 
  <img src="http://hits.dwyl.com/kauanrakoski/scrooge.svg"> &nbsp; 
  <img src="https://img.shields.io/npm/dm/scroooge.svg">
</p>

<p align="center"><img src="./assets/UIHere.png"/></p>

- [Usage](#usage)
- [Contribute](#contribute)

### About
Scrooge is a very simple, jquery-like, library for javascript. It aims to make HTML manipulation easier

#### Functions

- Quick selector ($).
- Basic CSS operations (addclass, removeclass).
- Simplified event listeners (on, click, ...).
- Animations (ex.: quick intersection observers)
- And much more...

### usage
You can use scrooge by the CDN link:

#### CDN link
```html
<script src="https://cdn.jsdelivr.net/gh/KauanRakoski/Scrooge/all.js"></script>
```

#### NPM package
```bash
npm install scroooge
```
## Getting started
After that, you are able to start coding. Code example:
```javascript
  $('document').ready(function(){
            $('.someItem').resize(3, 1);
            
            $('.someItem').on('mouseover', function(){
                console.log('mouseover');
            });

            $('.someItem').on('click', function(){
                $('.someItem').css('background-color', 'white');
            })

            $('.someOtherItem').reveal() <-- creates a simple intersection observer
        })
```


### Version
V - 1.1.6 

**Last updates** 

Minor changes and improvements. 

Bug correction.

# contribute
Contribution is very appreciated. Feel free to fork and create a pull request, or open an issue.

------
Made with ❤️ and javascript.
