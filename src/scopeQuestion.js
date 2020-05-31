var x = {
  hi: 'Hello',
  greet: function() {
    console.log(this.hi);
  }
};
var y = {
  hi: 'Hey there!',
  greet: x.greet
};
//What do I console log?
y.greet();