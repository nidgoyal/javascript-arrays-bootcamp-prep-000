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


function addElementToBeginningOfArray(array,element){
  return [...array, element];
}


function destructivelyAddElementToBeginningOfArray(list, element){
  list.unshift(element);
  return list;
}

function addElementToEndOfArray(array,element){
  return [array,...element];
}


function destructivelyAddElementToEndOfArray(list, element){
  list.push(element);
  return list;
}


function accessElementInArray(array, index){
  console.log(array[index]);
}


