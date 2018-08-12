var recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object);
  Object.assign( newObj,{[key]:value})
}