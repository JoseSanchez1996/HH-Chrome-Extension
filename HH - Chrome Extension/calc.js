
// chromew extension is the window thats running document

// vs code is what document is


// const varibl = closure(scriptt, scriptb) = html

const div = document.getElementById('assigned')
// function closure = head title
const closure = document.createElement('div')
closure.setAttribute('id', 'named')
div.appendChild(closure)


function(script1, script2){
    const vari = 1;
    const varib = 10;
    // outer function is the head
    return function(vari, varib){
        return vari + varib
        // inner function is the body / what is displayed
    };
};


// main.js?   what is event listener ("DOMContentLoaded")? 

//  once global execution content read everything on our Document?
// then run this. or that.

// how do we access value / object/something?
// document.getElementById()
// document.querySelector()

// class Calculator{
    // constructor(el){
    

    // }

// }

