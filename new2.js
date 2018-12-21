function create() {
  // 创建一个空对象
  let obj = new Object()
  // 拿到构造函数
  let Con = [].shift.call(arguments)
  // 指向原型
  obj.__proto__ = Con.prototype
  // 绑定 this,执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是一个新对象
  return typeof result === 'object' ? result : obj
}