function reverse(string) {
    var updatedString = "";
    for(var i = string.length - 1; i >= 0; i--){
        updatedString += string[i];
    }
    return updatedString;
}

console.log(reverse("cool"));
console.log(reverse("amazing!"));
console.log(reverse("yay"));

function numVowels(string) {
    count = 0;
    string = string.toLowerCase();
    for(var i = 0; i < string.length; i++) {
        var characterCount = string[i];
        if(characterCount == "a" || characterCount == "e" || characterCount == "i" || characterCount == "o" || characterCount == "u"){
            count++;
        }
    }
    return count;
}

console.log(numVowels("texas"));
console.log(numVowels("yEEhaw"));
console.log(numVowels("aeiouuuuuuub"));

function numStringsShorterThanLength(strings, length) {
    var countStrings = 0;
    for(i = 0; i < strings.length; i++) {
        if(strings[i].length<length) {
            countStrings++;
        }
    }
    return count;
}

console.log(numStringsShorterThanLength(["hey", "this"], 3));
console.log(numStringsShorterThanLength(["longword", "short"], 6));
console.log(numStringsShorterThanLength(["frog", "toad"], 2));
