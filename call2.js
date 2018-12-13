Function.prototype.call2 = function (context) {
  var context = context || window
  context.fn = this
  var args = []
  for(var i = 1; i < arguments.length; i+=1) {
    args.push('arguments[' + i + ']')
  }
  const result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
var value = 2
var foo = {
  value: 1
}

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
bar.call2(null)
bar.call2(foo, 'silence', 20)