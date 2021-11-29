//1
//Sum Zero
const addToZero = (arr) => {
    let addZero = false
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                addZero = true
            }else {
                // console.log(i)
                // console.log(j)
            }

        }
    }
    return console.log(addZero)
}
// addToZero([1, 2, 3, -1])
//Time: O(n^2)
//Space: O(n^2)


//2
//Unique Characters
const uniqueChar = (string) => {
    let uniq = ""
    for(let i = 0; i < string.length; i++) {
        if(uniq.includes(string[i]) === false) {
            uniq += string[i]
        }
    } if (uniq === string) {
        return true
    } else {
        return false
    }
}

// uniqueChar('james')
//Time: O(n^2)
//Space: O(n)


//3
//Pangram Sentence
const pangram = (string) => {
    // Match letters in the alphabet/remove punctuation
    const letters = string.toLowerCase().match(/[a-z]/g)
    // Adding to a set to remove duplicates
    const alphabet = [...new Set(letters)]
    // All 26 should be present
    return alphabet.length === 26
    }
// console.log(pangram("The quick brown fox jumps over the lazy dog!"))
// console.log(pangram("I like cats, but not mice"))
//Time: O(n)
//Space: O(n)


//4
//Longest Word
function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ
}
const findLongestWord = (arr) => {
    word = arr.reduce(longer)
    return word.length
    }
// console.log(findLongestWord(["hi", "hello", "supercalifragilisticexpialidocious"]))
//Time: O(n)
//Space: O(n^2)


