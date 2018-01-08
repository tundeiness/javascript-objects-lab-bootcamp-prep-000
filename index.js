var recipes = { };

<<<<<<< HEAD

=======
>>>>>>> 6677e565f244d54c937715c8e9bd1d015d983018
function updateObjectWithKeyAndValue(recipes, key, value){
  
  return Object.assign({prop: 1}, {prop2: 2})
  
}

<<<<<<< HEAD

=======
>>>>>>> 6677e565f244d54c937715c8e9bd1d015d983018
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  
      recipes[key] = value;
      return recipes;
      
}


<<<<<<< HEAD

function deleteFromObjectByKey(recipes, key){
  
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(recipes, key){
  
        delete recipes[key]
	      return recipes;
  
}
=======
function deleteFromObjectByKey(recipes, key){
  
  
}

>>>>>>> 6677e565f244d54c937715c8e9bd1d015d983018
