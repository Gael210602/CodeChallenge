letterstodict = (letters) => letters.reduce((dict, i) => {
    dict[i] = (dict[i] || 0) + 1;
    return dict;
}, {});

joinwordsandsep = (result, separators) =>{
    let l = Math.min(result.length, separators.length);
    let finalresult = [];
    for (let i = 0; i < l; i++) {
        finalresult.push(result[i], separators[i]);
    }
    finalresult.push(result.slice(l), separators.slice(l));
    return finalresult.join("")
}

function replacer(sentence){
    try {
        let words = sentence.split(/[^A-Za-z]/);
        words = words.filter(item => item);

        let separators = sentence.split(/[A-Za-z]/);
        separators = separators.filter(item => item);

        let result = [];

        for(const word of words){
            let letters = word.split("");
            letters.shift();
            letters.pop();
            let lettersdict = letterstodict(letters);
            result.push( word.charAt(0)+(Object.keys(lettersdict).length)+word.charAt(word.length-1));
        }

        return joinwordsandsep(result, separators);
    } catch (error) {
        return error;
    }
}


module.exports = replacer;