// gen random password
function gen(){

 // set password length/complexity
 let complexity =document.getElementbyId("slider").value;

 //possible password values
 let values = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";

 let password = "";

 // create for loop to choose password characters
 for(var i = 0; i<= complexity; i++){
     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
 
    }

// add password to textbox/display area
document.getElementById("display").value = password;

//add password to previously generated passwords section
document.getElementById("lastPassword").innerHTML += password + "<br />";


}

// get default length display of 14
document.getElementById("length").innerHTML = "Length:14";