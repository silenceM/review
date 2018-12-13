Function.prototype.apply2 = function(context, arr) {
  var context = context || window
  context.fn = this
  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0; i < arr.length; i +=1) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}

var foo = {
  value: 1
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
bar.apply(null)
bar.apply(foo, ['silence', 18])