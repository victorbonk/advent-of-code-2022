
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");

const shapes = {
	X: 1, // Rock
	Y: 2, // Paper
	Z: 3, // Scissors
};

const results = {
	'A Y': 6, // A - Rock
	'A X': 3, // B - Paper
	'A Z': 0, // C - Scissors
	'B Y': 3, 
	'B X': 0,
	'B Z': 6, 
	'C Y': 0, 
	'C X': 6,
	'C Z': 3, 
}

let score = 0;

input.forEach((strategy) => {
	const playerMove = strategy.split(' ')[1];

	if (playerMove != null) {
		score += shapes[playerMove];
		score += results[strategy];
	}
});

console.log(score);
