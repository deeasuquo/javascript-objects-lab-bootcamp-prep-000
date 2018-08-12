var recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object);
  Object.assign( newObj,{[key]:value})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  Objecr.assign(object,{[key]:value})
  return object
}
