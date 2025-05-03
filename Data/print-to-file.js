// print-to-file.js
const fs = require('fs');
const path = require('path');

// Read input from environment variable
const input = process.env.INPUT_TEXT || 'No input text provided';

// Ensure the Data directory exists
//const outputDir = path.join(__dirname, 'Data');
const outputDir = __dirname;
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Append input to the file
const outputPath = path.join(outputDir, 'output.txt');
fs.appendFileSync(outputPath, input + '\n', 'utf8');

console.log(`Appended input to ${outputPath}`);
