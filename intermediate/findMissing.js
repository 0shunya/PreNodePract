function findMissing(arr) {
    for (let i = 1; i <= arr.length + 1; i++) {      
        if(!arr.includes(i)) {
            console.log(i);         
        }
    }
    return;
    
}

findMissing([1,2,4,5,6])