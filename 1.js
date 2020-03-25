function City(name) {
  this.name = name
}
City.prototype.about = function() {
  console.log('这是' + this.name);
  
}
var c1 = new City('北京')
console.log(c1.name)
c1.about()