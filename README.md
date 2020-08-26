# Scrooge

<p align="center"><img src="./assets/UIHere.png"/></p>

- [Usage](#usage)
- [Contribute](#contribute)

### About
Using the familiar jQuery dollar sign ($), easily manipulate, create and animate elements using DOMang, a lightweight, easy and fast javascript library.

#### Functions

- Quick selector ($).
- Basic CSS operations (addclass, removeclass).
- Simplified event listeners (on, click, ...).
- Animations (ex.: quick intersection observers)
- And much more...

### usage
You can use DOMang by the CDN link:

#### CDN link
```html
<script src="https://rawcdn.githack.com/KauanRakoski/DOMang/5842d8107474c0ca24c20da3a378832f8aa876f8/script.js"></script>
```

#### NPM installation
Or you can install it running the command -:

```
npm install domang
```

And then import it:
```javascript
import $ from 'domang';
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
If you are a developer and want to contribute, read the following lines:

## What is domang purpose
- Make development easier.
- Simplify boring tasks.

### Task list
If you want to contribute, you can do anything you want if it is useful. Urgent tasks are:

- [ ] State managing methods - toogle methods for example.
- [ ] Create static and dynamic animate methods.
- [ ] Create a "design system" - a logical repo organization.

## How to Contribute
If you have never done a pull request, I recommend checking out [first-contributions](https://github.com/firstcontributions/first-contributions);

First, you need to fork the repository. Then, you can clone it to yout local machine:

```bash
$ git clone https://github.com/your-username/DOMang
```
Create another branch and start working on it. After done, push it to your github repository and then create a pull request.