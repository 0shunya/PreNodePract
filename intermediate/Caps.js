function capitalize(str){
    let one = str.split(" ").slice();
    console.log(one);
    let result = []
    for (let i = 0; i < one.length; i++) {
        const element = one[i];
        // console.log(element);
        
        let capzz = element[0].toUpperCase() + element.slice(1);
        console.log(capzz);
        
        result.push(capzz)
    }
   return  console.log(result.join(" "));
}

capitalize("i love coding");