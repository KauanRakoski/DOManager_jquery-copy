const Scrooge = (function () {
    'use strict';

    console.log('%cUsing DOMang (V1)', 'background-color: #2dc437; padding: 20px; color: #FFFFFF')

    // Initializes the parameters (constructor)
    // ? @desc  creates a list of elements, which will be used in operations.
    var constructor = function (selector) {
        if (!selector) return;

        if (selector == 'document') this.elems = [document];
        else if (selector == 'window') this.elems = [window];

        else this.elems = document.querySelectorAll(selector);
    };





    /* 
        * 'Generic' Methods
    */


    // For loop function (each)
    // ? @desc loops through all elements and applies a function
    constructor.prototype.each = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw new Error('Callback does not exist or is not a function.');
        }
        for (var i = 0; i < this.elems.length; i++) {
            callback(this.elems[i], i);
        };
        return this;
    };


    // ClassList add method (addClass)
    // ? @desc adds a class to the passed element(s)
    constructor.prototype.addClass = function (className) {
        this.each(function (item) {
            item.classList.add(className)
        });
        return this
    };


    // ClassList remove method
    // ? @desc removes a class name from the passed elements(s)
    constructor.prototype.removeClass = function (className) {
        this.each(function (item) {
            item.classList.remove(className)
        });
        return this
    };

    // Toogle class method
    // ? Toogles the class of an item.
    constructor.prototype.toogleClass = function (className) {
        this.each(function (item) {
            if (item.classList.contains(className)) {
                item.classList.remove(className);
            }
            else {
                item.classList.add(className);
            }
        });
        return this;
    }




    /* 
        * Event Handlers
    */



    // Event handlers
    // ? @desc execute the event using a callback function
    constructor.prototype.on = function (eventName, callback) {
        this.each(function (item) {
            item.addEventListener(eventName, callback)
        });
        return this;
    };


    // Click event handler
    // ? @desc returns a callback on click event
    constructor.prototype.click = function (callback) {
        this.each(function (item) {
            item.addEventListener('click', callback)
        });
        return this;
    };


    // Mouseover event handler
    // ? @desc handle mouseover event
    constructor.prototype.mouseOver = function (callback) {
        this.each(function (item) {
            item.addEventListener('mouseover', callback)
        });
        return this;
    };

    // Page load check
    // ? @desc Check if page is loaded
    constructor.prototype.ready = function (callback) {
        if (!callback || typeof callback !== 'function') return;

        if (document || window in this.elems) {
            window.addEventListener('load', callback)
        }
        else throw new Error('INVALID SELECTOR ERROR: the selector is not set to document or window');

        return this;
    };





    /* 
        * Style Methods
    */



    // Hide method
    // ? @desc hide all the selected objects
    constructor.prototype.hide = function () {
        this.each(function (item) {
            item.style.display = 'none'
        });
        return this;
    };


    // Show method
    // ? @desc show all the selected objects
    constructor.prototype.show = function () {
        this.each(function (item) {
            item.style.display = 'block'
        });
        return this;
    };

    // toogleShow method
    constructor.prototype.visibility = function () {
        this.each(function (item) {
            if (item.style.display != 'none') item.style.display = 'none';

            else item.style.display = 'block';
        })
        return this;
    }

    // Customize the style using css
    // ? @desc set the property to a passed value
    // Unfinished
    constructor.prototype.css = function (property, value) {
        this.each(function (item) {
            item.style[property] = value;
        })
        return this;
    };



    /* 
    Animations 
    */

    constructor.prototype.reveal = function (obj) {
        this.each(function (item) {
            let observer, options, option;
            item.style.transition = `transform 300ms ease-in-out`;
            
            const binops = {
                x(object, quantity) {
                    object.style.transform = `translateX(${quantity + "px"})`;
                    return object
                },
                y(object, quantity) {
                    object.style.transform = `translateY(${quantity + "px"})`;
                    return object;
                },
                opacity(object, quantity) {
                    object.style.opacity = 0;

                }
            }

            options = {
                root: null,
                rootMargin: "0px",
                treshold: 0.4,
            };

            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    for (option in obj) {
                        setTimeout(() => {
                            let ops = binops[option]
                            ops(entry.target, obj[option])
                        }, 300)
                    }
                    observer.unobserve(entry.target);
                });
            }, options);

            observer.observe(item);
        });
        return this;
    }




    /*
        * Proprierties
    */

    // SetSize method
    // ? @desc set the size of elements based on given values and unities.
    constructor.prototype.setSize = function (res_x, res_y) {
        this.each(function (item) {
            item.style.width = `${res_x}`;
            item.style.height = `${res_y}`;
        });
        return this;
    };

    // Resize method
    // ? @desc resizes the element using x and y values
    constructor.prototype.resize = function (res_x, res_y) {
        this.each(function (item) {
            item.style.transform = (`scale(${res_x}, ${res_y})`);

        });
        return this;
    };




    /* 
        * Value get
        ! Only works using an ID
    */

    constructor.prototype.val = function (valueSetter) {
        var target = this.elems[0]
        var targetID = target.id;

        var rtarget = document.getElementById(targetID)

        if (valueSetter) rtarget.value = valueSetter;
        else return rtarget.value;

        return this;
    };


    /* 
        
    /* 
    *Instance method
    ?@desc intanciate the class, making desnecessary the use of "new" 
    */

    var instantiate = function (selector) {
        return new constructor(selector);
    };

    return instantiate;


})();

export default Scrooge;