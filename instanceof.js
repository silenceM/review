function Instanceof(left, right){
  let prototype = right.prototype
  left = left.__proto__
  while(true) {
    //找到了最上层
    if (left === null) return false
    if (prototype === left) return true
    left = left.__proto__
  }
}