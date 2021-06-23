function replacer(sentence){
    try {
        //We split the sentence into an array of words
        var words = sentence.split(/[^A-Za-z]/);

        //We split to get their separators
        var separators = sentence.split(/[A-Za-z]/);
        //We take off empty strings from our separators
        separators = separators.filter(item => item);


        //We declare the list of the result
        let result = [];
        let finalresult = [];
        
        //We make a for to iterate all words in array
        for(const word of words){
            //We declare this temp variables, the first to know letters we already hae and the other to count how
            //many different letters we are counting
            let letters = [];
            var counter = 0;

            //We iterate in the letters of each word, we start in the second letter and finish in the penultimate
            for(var i =1; i<word.length-1; i++){
                //If the letter is already in the array we pass
                if(letters.includes(word.charAt(i))){
                    //pass
                }else{
                    //If the letter is not in the array we add it and we add 1 to counters
                    letters.push(word.charAt(i));
                    counter++;
                }
            }
            //We add to the result the first letter, counter result and the last letter
            result.push( word.charAt(0)+counter+word.charAt(word.length-1))
        }

        var j, l = Math.min(result.length, separators.length);
        for (j = 0; j < l; j++) {
            finalresult.push(result[j], separators[j]);
        }
        finalresult.push(...result.slice(l), ...separators.slice(l));

        //We join the array with whitespaces to return a sentence
        return finalresult.join("");
    } catch (error) {
        return error;
    }
}

module.exports = replacer;