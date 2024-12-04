//named export

function add(a, b) {
  return a+b
}

function subtact(a, b) {
  return a-b
}

function multiply(a, b){
  return a*b
}

module.exports = {
  add,
  subtact,
  multiply,
}