function parent() {
  this.parentName = 'Tom'
}

parent.prototype.getParentName = function() {
  return this.parentName
}

function child() {
  this.parentName = 'Jerry'
}

child.prototype = new parent();

child.prototype.getChildName = function() {
  return this.childName
}

const newChild = new child();
console.log(newChild.getParentName())