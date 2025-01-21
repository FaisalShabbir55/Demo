// JavaScript to change the background color when the button is clicked
document.getElementById('colorButton').addEventListener('click', function() {
    // Randomly change the background color
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
