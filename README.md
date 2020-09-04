<h1 align="center">Scrooge</h1>

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
<script src="https://rawcdn.githack.com/KauanRakoski/DOMang/5842d8107474c0ca24c20da3a378832f8aa876f8/script.js"></script>
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

            $('.someOtherItem').reveal({x: 400, y: 300}) <-- creates a simple intersection observer
        })
```


### Version
V - 1.1.2 

**Last updates** 

Minor changes and improvements. 

Bug correction.

# contribute
Contribution is very appreciated. Feel free to fork and create a pull request, or open an issue. A "good firt issue" would be to make the code of "reveal" function cleaner and fix the issue of executing just one parameter.

------
Made with ❤️ and javascript.