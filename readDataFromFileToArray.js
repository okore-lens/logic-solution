const fs = require("fs");

function findMaximumTotal(triangle) {
	for (let i = triangle.length - 2; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
		}
	}

	return triangle[0][0];
}

// Read the triangle from the text file
const triangle = [];
const fileData = fs.readFileSync("./data/triangle.txt", "utf8");
// returning strings of a specified line as an array
const lines = fileData.trim().split("\n");

// for each array returnde we split the strings after every empty string and add them as array of numbers to our triangle  array
for (const line of lines) {
	const row = line.trim().split(" ").map(Number);
	triangle.push(row);
}

// Find the maximum total
const maximumTotal = findMaximumTotal(triangle);
console.log("Maximum total from top to bottom:", maximumTotal);
