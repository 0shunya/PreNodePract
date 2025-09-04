// function Dup(Arr) {
//     let NewArr = []
//     let SecArr = []
//     for (let i = 0; i < Arr.length; i++) {
//         const element = Arr[i];
//         // console.log(element);
//         if(NewArr.includes(element)){
//             if(!SecArr.includes(element)) {
//                 SecArr.push(element)
//             // console.log(SecArr); 
//             }
            
//         } else {
//             NewArr.push(element)
//         }
//     }
//     return SecArr
// }

// console.log(Dup([1, 2, 3, 2, 4, 1, 1, 5]))


function Dup(Arr) {
    let NewArr = []
    let SecArr = []
    for (let i = 0; i < Arr.length; i++) {
        const element = Arr[i];
        // console.log(element);
        if(!NewArr.includes(element)){
            SecArr.push(element)
            if(!NewArr.includes(SecArr)){
                NewArr.push(element)
            }
            
        }
    }
    return NewArr
}

console.log(Dup([1, 2, 3, 2, 4, 1, 1, 5]))