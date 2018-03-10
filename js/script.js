var abc = 12.32;

abc = "sdfsd";
//document.write(abc);
console.log(abc)

function myFunction(name) {
    return "My name is " + name + "<br>";
}

document.write(myFunction('<b>Imam</b>'));


var a = 10;
var b = 15;

// if(a != b) {
//     document.write(false);
// } else {
//     document.write(true);
// }

var myArray = new Array();
myArray[0] = "name";
myArray[1] = "Age";

var array2 = new Array(1, 2, 3, 4);

var array3 = [true, false]

var msg = "";

for(i = 0; i < myArray.length; i++) {
    msg += (myArray[i] + "<br>");
}

document.getElementById('ab').innerHTML = msg;

var userValue = prompt("Name", "enter your name")

switch (userValue) {
    case "a": 
        document.write('A');
        break;
    case "b": 
        document.write('B');
        break;
    case "c": 
        document.write('C');
        break;

    default:
        document.write('Nothing');
        break;
}

var a = 10;
var b = 54;
var c = a + b;

console.log(c);

