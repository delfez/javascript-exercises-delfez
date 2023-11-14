
let sumAll = function(num1, num2){

let sum = 0
let minnum = Math.min(num1, num2)
let maxnum = Math.max(num1, num2)

    if(num1 <= 0 || num2 <= 0){
        return "ERROR"
    }else if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR"
    }else{
        for(let i = minnum; i <= maxnum; i++){
            
        sum = sum + i
          
        }
    } 
    return sum
    }

   
//alternative version (dumber but original) below

/*

    let sumAll = function(num1, num2){
    
        let sum = 0
    
   if (num1 <= 0 || num2 <= 0){
        return "ERROR"
    }else if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR"
    }else if (num1 < num2){
        for(let i = num1; i <= num2; i++){
            
           sum = sum + i
          
         }
         return sum
    }else if(num1 > num2){
    for(let i = num2; i <= num1; i++){
            
        sum = sum + i
       
      }
      return sum
}
    }

*/


// Do not edit below this line
module.exports = sumAll;
