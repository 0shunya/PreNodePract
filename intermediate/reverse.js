// function reverseString(str){
//     const rev =  str.split("").reverse().join("");
//     console.log(rev);
// }


// reverseString("hello")

function reverseString(str){
    const Arr = []
    const rev =  str.split("");

    for (let i = rev.length  - 1; i >= 0; i--) {
        const element = rev[i];
            Arr.push(element)
            // Arr = Arr(...Arr)
    }
    return Arr.join("")
}


console.log(reverseString("hello"));
