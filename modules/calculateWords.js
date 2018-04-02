const calculateWords = (word, sentence) => {
	const arr = sentence.split(' ');
	let count = 0;

	arr.forEach(e => {
		if (e === word) count++;
	});

	return count;
};

module.exports = calculateWords;
