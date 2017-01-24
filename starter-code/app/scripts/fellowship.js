// create a fn called balancedStr
//takes in 1 string argument
//should return true or false
//depends on the string given

var str1 = "this is a balanced string"
var str2 = 'this is (not a [balanced)] string'
var str3 = 'this is also (not] a balanced string'

//balancedStr(str1)  //true

function balancedStr(str){
  for (i=0; i<str.length; i++){
    for(j=str.length-1; j >= 0; j--){
      if(str[i] === '(' && str[j] === ')') {
        return true
      }else return false
    }
    return true
  }
}
console.log(balancedStr(str1))
