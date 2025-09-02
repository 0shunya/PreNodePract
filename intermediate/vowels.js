function vowels(str) {
    // console.log(str);
    let splitted = str.split("");
    // console.log(splitted);

    let vow = ["a", "e", "i", "o", "u"]
    // console.log(vow);

    const store = {};
    
    // console.log(splitted.length)

    for (let i = 0; i < splitted.length; i++) {
        const element = splitted[i];

        if(vow.includes(element)){
            store[element] = (store[element] || 0) +1
        }
    }
    return console.log(store)
}

vowels("javascript");