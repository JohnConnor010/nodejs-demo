let censoredWords = ["sad","bad","mad"];
let customCensoredWords = [];
function censor(intStr){
    for (let idx of censoredWords) {
        intStr = intStr.replace(censoredWords[idx],"******");
    }
    for (let idx of customCensoredWords) {
        intStr = intStr.replace(customCensoredWords[idx],"******");
    }
    return intStr;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;