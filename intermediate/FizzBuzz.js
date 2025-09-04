function FizzBuzz(){
    // console.log(num);

    for (let num = 0; num < 20; num++) {
        if(num % 3 == 0 && num % 5 == 0){
            console.log(num);
            console.log("Fizzbuzz")
    }
    else if (num % 5 == 0) {
        console.log(num);
        console.log("Buzz")
    }
    else if (num % 3 == 0) {
        console.log(num);
        console.log("Fizz")
    }
 } 
}

FizzBuzz()
// console.log(FizzBuzz());
