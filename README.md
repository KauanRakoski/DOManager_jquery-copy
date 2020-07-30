# DOMang
Domang is a library based in jQuery, which intend to simplify the process of selecting and manipulating HTML documents.<br>

### About
Using the familiar jQuery dollar sign ($), easily manipulate, create and animate elements using DOMang, a lightweight, easy and fast javascript library.

#### Functions

<ul>
  <li>Quick selector ($).</li>
  <li>Basic CSS operations (addclass, removeclass).</li>
  <li>Simplified event listeners (on, click, ...).</li>
  <li>Animations (ex.: quick intersection observers)</li>
  <li>And much more...</li>
</ul>

### Usage
You can use DOMang by the CDN link:

#### CDN link
```html
<script src="https://rawcdn.githack.com/KauanRakoski/DOMang/5842d8107474c0ca24c20da3a378832f8aa876f8/script.js"></script>
```

#### NPM installation
Or you can install it running the command - we are working on this. Use the CDN link instead.-:

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

            $('.someOtherItem').rawReveal() <-- creates a simple intersection observer
        })
```


### Version
V - 1.1.2 <br>
**Last updates** <br>
Minor changes and improvements. <br>
Bug correction.
