// Hardcoded input data
const inputData = {
    black: 10,
    white: 20,
    yellow: 30,
    red: 40,
    blue: 50
};

// Process input data and generate a HEX code (simulated logic)
function processData(data) {
    const hexColor = `#${(data.black * 2).toString(16).padStart(2, '0')}${(data.white * 2).toString(16).padStart(2, '0')}${(data.yellow * 2).toString(16).padStart(2, '0')}`;
    return { hex: hexColor };
}

// Simulate a response when data is sent
if (typeof window !== 'undefined') {
    // Simulating fetching data and then returning a response
    setTimeout(() => {
        const output = processData(inputData);
        document.getElementById('output').innerHTML = `Generated HEX: ${output.hex}`;
    }, 2000);
}
