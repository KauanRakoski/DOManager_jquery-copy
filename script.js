var $ = (function(){
    'use strict';

    console.log('%cUsing DOMang (V1)', 'background-color: #2dc437; padding: 20px; color: #FFFFFF')

    // Initializes the parameters (constructor)
    // ? @desc  creates a list of elements, which will be used in operations.
    var constructor = function(selector){
        if(!selector) return;

        if(selector == 'document') this.elems = [document];
        else if(selector == 'window') this.elems = [window];

        else this.elems = document.querySelectorAll(selector);
    };





    /* 
        * 'Generic' Methods
    */
    

    // For loop function (each)
    // ? @desc loops through all elements and applies a function
    constructor.prototype.each = function(callback){
        if(!callback || typeof callback !== 'function'){
            throw new Error('Callback does not exist or is not a function.');
        }
        for(var i = 0; i < this.elems.length; i++){
            callback(this.elems[i], i);
        };
        return this;
    };


    // ClassList add method (addClass)
    // ? @desc adds a class to the passed element(s)
    constructor.prototype.addClass = function(className){
        this.each(function(item){
            item.classList.add(className)
        });
        return this
    };


    // ClassList remove method
    // ? @desc removes a class name from the passed elements(s)
    constructor.prototype.removeClass = function(className){
        this.each(function(item){
            item.classList.remove(className)
        });
        return this
    };





    /* 
        * Event Handlers
    */



    // Event handlers
    // ? @desc execute the event using a callback function
    constructor.prototype.on = function(eventName, callback){
        this.each(function(item){
            item.addEventListener(eventName, callback)
        });
        return this;
    };


    // Click event handler
    // ? @desc returns a callback on click event
    constructor.prototype.click = function(callback){
        this.each(function(item){
            item.addEventListener('click', callback)
        });
    };


    // Mouseover event handler
    // ? @desc handle mouseover event
    constructor.prototype.mouseOver = function(callback){
        this.each(function(item){
            item.addEventListener('mouseover', callback)
        });
    };

    // Page load check
    // ? @desc Check if page is loaded
    constructor.prototype.ready = function(callback){
        if(document || window in this.elems){
            window.addEventListener('load', callback)
        }
        else throw new Error('INVALID SELECTOR ERROR: the selector is not set to document or window');
    };





    /* 
        * Style Methods
    */



    // Hide method
    // ? @desc hide all the selected objects
    constructor.prototype.hide = function(){
        this.each(function(item){
            item.style.display = 'none'
        });
    };


    // Show method
    // ? @desc show all the selected objects
    constructor.prototype.show = function(){
        this.each(function(item){
            item.style.display = 'block'
        });
    };


    // Customize the style using css
    // ? @desc set the property to a passed value
    // Unfinished
    constructor.prototype.css = function(property, value){
        this.each(function(item){
            item.style[property] = value;
        })
    };




    /*
        * Proprierties
    */

    // SetSize method
    // ? @desc set the size of elements based on pixel values.
    constructor.prototype.setSize = function(res_x, res_y){
        this.each(function(item){
            item.style.width = `${res_x}px`;
            item.style.height = `${res_y}px`;
        });
        return this;
    };

    
    constructor.prototype.resize = function(){
        // TODO: resize function based on percentage
    };






    /* 
        * Value get
        ! Not working properly
    */
   
    constructor.prototype.val = function(value){
        this.each(function(item){
            if(!value) return item.innerText;

            item.value = value;
        });
        return this; 
    };


    /* 
    * Ajax and other methods. Coming soon.
    */



    // Ajax method
    // ? @desc logs the requested url, for now
    constructor.prototype.ajax = function(url){
        console.log(url)
    }; 


    
    /* 
    *Instance method
    ?@desc intanciate the class, making desnecessary the use of "new" 
    */

    var instantiate = function(selector){
        return new constructor(selector);
    };

    return instantiate;

    
})();



// ? @Version 1.0.2
// ! Author: Kauan Rakoski
// ! [CodePaqter] project

// CodePaqter is a false startup (all content free), which I created to make projects and learn programming. It is not online yet.