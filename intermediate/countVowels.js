function CV(str) {

    let str2 = str.split("")
    let store = [];
    let vowels = ["a","e","i","o","u"]

    // console.log(str2);
    // console.log(str2.includes(vowels));

    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];

        // console.log(element);
        if(vowels.includes(element)){
            //  console.log(vowels.includes(element)); 
             store = (0) +1
             store += store
            //  store = store[element] + store[element]
        }
    }
    return store;
}
//     if(str.includes(vowels)){
//         console.log("True");
//     }
// }

// CV("Hello")


console.log(CV("Hello"));


//Step 2

// function countVow(str) {
//     let count = 0;
//     let vowels = ["a","e","i","o","u"]
//     console.log(vowels);
    
//     if(str.includes(vowels)){
//         count++
//     }
// }

// console.log(countVow("Hello"));
