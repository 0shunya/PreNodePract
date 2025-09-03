// function flatten(arr) {
//     let nestArr = arr;
//     const newArr =  nestArr.flat(Infinity)
//     return console.log(newArr);
    
// }

// flatten([1, [2, [3, 4], 5]])

function flatten(arr) {
    const NestedArr = [];

    for(let element of arr) {
        if(Array.isArray(element)){
            NestedArr.push(...flatten(element))

            // console.log( "First", (NestedArr.push(...flatten(element))));
            
        }
        else {
            NestedArr.push(element)
        }
    }
    return NestedArr;
}

console.log(flatten([1, [2, [3, 4], 5]]));
