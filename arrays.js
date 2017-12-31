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
];
chocolateBars();

var array= [];
function addElementToBeginningOfArray(){
  array.unshift("",'foo')
  return array;
}
addElementToBeginningOfArray();

var newArray = [1];
function destructivelyAddElementToBeginningOfArray(array, element){
  new2Array = [element,...newArray];
  return new2Array;
}
destructivelyAddElementToBeginningOfArray(newArray,"foo");

