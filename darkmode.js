var button = document.querySelector(".dark");
var body = document.querySelector("body");

function darkModeToggle(){
    body.classList.toggle('darkmode');

    if(body.classList.contains('darkmode')){
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
}

button.addEventListener("click", darkModeToggle)
if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('darkmode');
   }