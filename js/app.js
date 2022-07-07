// function getString(){
//     String1 = prompt("Enter the string");

//     return String1;
// }
// function FindCharacter(String1){
//     for(var i=0; i< String1.length; i++){
//         for(var j=i+1 ; j < String1.length ; j++){
//             if (String1[i] === String1[j]){
//                 break;
//             }
//             console.log("ok");
//         }
//     }
// }
// var OurText = getString();
// FindCharacter(OurText);

//Chalenge 5 

// function finder (string) {
//     var tinify = string.toLowerCase();
//     var parseIt = tinify.match(/[a-z]/gi);
//     var orderIt = parseIt.sort();
//     for (i=0; i < string.length; i++) {
//         if (orderIt[i] !== orderIt[i+1]) {
//             for (j=0; j < string.length; j++) {
//                 if (orderIt[i] === parseIt[j]) {
//                     return parseIt[j];
//                 };
//             };
//         };

//     };
// };
// console.log(finder("this hat is the greatest!"));

//Challenge 6

var num = [ 1.5, 3, 2.5, 1 ];
var total = 0;
function Calc(array){
    for(var i=0 ; i< array.length;i++){
        total = total+array[i];
    }
    console.log(total/array.length);
}

Calc(num);