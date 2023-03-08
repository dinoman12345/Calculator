function append(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
  }
  
  function clear() {
    document.getElementById('display').value = '';
  }
