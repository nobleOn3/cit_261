//Need export to pass functions along
export function qs(query) {
    return document.querySelector(query);
}

export function qsa(query) {
    return document.querySelectorAll(query);
}

export function readFromLS(key){
    return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function bindTouch(selector, callback) {
    qs(selector).addEventListener('touchend', (e) =>{ //normally don't do this, you want to do a regular function
        e.preventDefault(); //prevents the default functionality (moveing onto the "click" event)
        callback();
    });
    qs(selector).addEventListener('click', (e) =>{
        callback();
    });
}