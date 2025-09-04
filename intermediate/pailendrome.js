function isPalindrome(str){
    let one = str.split("").reverse()
    let two = str.split("")

    // console.log("rev", one);
    
    if(two.join("") == one.join("")) {
        console.log(two);
        
        return true ;
    }
    else {
        console.log(two);
        console.log(one);
        return false;
    }
}

isPalindrome("racecar")
console.log(isPalindrome("racecar"));
