function validCard(num){
   let validNum = num.toString().split('').map(Number);
   if(validNum.length % 2== 0 ){
    validNum = validNum.map((n,i)=> i%2 == 0 ? n*2 : n);
   }
   else{
    validNum = validNum.map((n,i)=> i%2 !==0 ? n*2 : n) 
   }
   
  validNum = validNum.map((el,i)=> el > 9 ? el - 9 : el)
  //console.log(validNum)

   const reducer = validNum.reduce((total,i)=> total += i);
   //console.log(reducer);

   if(reducer %10 == 0){
    return true
   }
   else{
    return false
   }


}
console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));
console.log(validCard(8675389));
console.log(validCard(38520000023237));
console.log(validCard(4222222222222));