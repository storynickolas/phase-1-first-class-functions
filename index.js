function receivesAFunction(callBackFunction) {
  return callBackFunction()
}

function callBackFunctionTWo() {
  return ''
}
function returnsANamedFunction() {
  return callBackFunctionTWo
}

function returnsAnAnonymousFunction() {
  return function() {
    return ''
  }
}