module.exports = function (){
  return {
    add: function(num1, num2) {
      sum = num1 + num2;
      console.log('Sum: ' + sum);
    },
    multiply: function(num1, num2) {
      sum = num1 * num2;
      console.log('Multply: ' + sum);
    },
    square: function(num) {
      sum = num*num;
      console.log('Squared: ' + sum);
    },
    random: function(num1, num2) {
      if (num1 < num2){
        min = Math.ceil(num1);
        max = Math.floor(num2);
        number = Math.floor(Math.random() * (max - min)) + min;
      console.log('Random: ' + number);
      }
      else{
        if (num1 > num2){
          min = Math.ceil(num2);
          max = Math.floor(num1);
          number = Math.floor(Math.random() * (max - min)) + min;
        console.log('Random: ' + number);
        }
      }
    }
  }
};
