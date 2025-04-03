const getOccurrencies = (str) => {
    let letterCounter = {};

    for(let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        // Todo: Check if char is a letter /[a-z]/i
        letterCounter[char] = letterCounter[char] + 1 || 1;
    }
    return letterCounter;
};

const checkPanagrams = (sentencesArr) => {
    let results = {};
    sentencesArr.forEach(sentence => {
        const occurrencies = getOccurrencies(sentence);
        const occurrenciesArr = Object.entries(occurrencies);
        const isPanagram = occurrenciesArr.length === 26;
        results[sentence] = {occurrencies, sentence, isPanagram};
    });
    return results;
}

const result = checkPanagrams(["Holaaaa", "Chau", "abcdefghijklmnopqrstuvwxyz"]);
console.log(result);