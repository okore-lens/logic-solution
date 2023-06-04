const GetMissingLetters = (sentence) => {
	sentence = sentence.toLowerCase();

	// using Set so that we can store unique values...each character to occur only once
	const lettersSet = new Set();

	for (let char of sentence) {
		//  Is character a letter and ASCII character ?
		if (/[a-z]/.test(char) && /^[a-z0-9]$/i.test(char)) {
			// Add the letter to the set
			lettersSet.add(char);
		}
	}

	//An array to store the missing letters
	const missingLetters = [];

	// Iterate over each letter of the alphabet
	for (let letter of "abcdefghijklmnopqrstuvwxyz") {
		// Letter  missing in the set
		if (!lettersSet.has(letter)) {
			missingLetters.push(letter);
		}
	}

	// Return the missing letters as a string, sorted in alphabetical order
	return missingLetters.join("");
};

const missingletters = GetMissingLetters("abcdefghijklmnopqrstuvwxy");

console.log(missingletters);
