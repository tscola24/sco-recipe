
var submit = document.querySelector("#submit");


submit.addEventListener("click", function(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var toSend = document.getElementById("toSend");
    var output = document.getElementById("output");

   
    console.log(name.value);
    console.log(email.value);
    console.log(toSend.value);

});
