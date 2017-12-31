var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars= [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
chocolateBars();


function addElementToBeginningOfArray(){
 var array= [1];
  array.unshift("foo");
  return array;
}
addElementToBeginningOfArray();


var newArray = [1];
function destructivelyAddElementToBeginningOfArray(array, element){
  newArray = [element,...newArray];
  return newArray;
}
destructivelyAddElementToBeginningOfArray(newArray,"foo");

