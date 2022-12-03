
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");

const shapes = {
	'A Y': 1, // rock / draw = rock
	'A X': 3, // rock / lose = scissors
	'A Z': 2, // rock / win = paper
	'B Y': 2, // paper / draw = paper
	'B X': 1, // paper / lose = rock
	'B Z': 3, // paper / win = scissors
	'C Y': 3, // scissors / draw = scissors
	'C X': 2, // scissors / lose = paper
	'C Z': 1, // scissors / win = rock
};

const results = {
	Y: 3, // Tie
	X: 0, // Lose
	Z: 6, // Win
}

let score = 0;

input.forEach((strategy) => {
	const playerResult = strategy.split(' ')[1];

	if (playerResult != null) {
		console.log(results[playerResult]);
		score += shapes[strategy];
		score += results[playerResult];
	}
});

console.log(score);
