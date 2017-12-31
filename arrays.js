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


function addElementToBeginningOfArray(list,element){
  list.unshift(element);
  return list;
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element,...array];
  return array;
}

