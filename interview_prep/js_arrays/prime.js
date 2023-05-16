let primes = [];
for(i=1; i <=100; i++){
    count = 0;
   for(j=2; j<=i-1; j++){
    if(i%j === 0 ){
       count++;
       break;
    }
   }
   if(count==0){
      primes.push(i);
   }
}
console.log(primes);