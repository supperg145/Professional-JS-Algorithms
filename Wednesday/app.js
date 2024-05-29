//Wednesday : Search and Replace
//Perform a search and replace the sentence using the arguments provided and return the new sentence.
//
//The first argument is the sentence to perform the search and replace on.
//The second argument is the word that you will be replacing (before).
//The third argument is what you will be replacing the second argument with (after).

function searchAndReplace(string, search, replace) {
    let stringArray = string.split(" ");
    for(let i = 0; i < stringArray.length; i++) {
        if(stringArray[i] === search) {
            stringArray[i] = replace;
        }
    }
    return stringArray.join(" ");
}

console.log(searchAndReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
