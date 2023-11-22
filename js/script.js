 // Loop da 1 a 100
 for (let i = 1; i <= 100; i++) {

    // Verifica se il numero è multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } 

       // Verifica se il numero è multiplo di 3
       else if (i % 3 === 0) {
        console.log("Fizz");
      } 

      // Verifica se il numero è multiplo di 5
      else if (i % 5 === 0) {
        console.log("Buzz");
      } 

       // Se il numero non è multiplo né di 3 né di 5, stampa il numero stesso
       else {
        console.log(i);
      }
}
