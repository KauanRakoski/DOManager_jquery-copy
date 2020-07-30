# DOMang
Domang is a library based in jQuery, which intend to simplify the process of selecting and manipulating HTML documents.<br>

### About
Using the familiar jQuery dollar sign ($), easily manipulate, create and animate elements using DOMang, a light, easy and quick javascript library.

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

```html
<script src="https://rawcdn.githack.com/KauanRakoski/DOMang/27df019bf8153528820a685a168628ecf03c7a3a/script.js"></script>
```

Or you can install it running the command:

```
npm install domang
```

And then import it:
```javascript
import $ from 'domang';
```

And then you can start writing code:
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
V - 1.1.1 <br>
Minor changes and improvements. Bug correction
