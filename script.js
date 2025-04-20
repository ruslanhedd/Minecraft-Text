// Function to generate the image based on input text
function generateImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const text = document.getElementById('textInput').value;

    // Clear the canvas before drawing new content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background color for the image
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties (color, font, alignment)
    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial'; // Font size and family
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const lineHeight = 18; // Height between lines of text
    let y = 0;
    let line = '';
    const words = text.split(' ');

    // Loop through the words and break lines if necessary
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        // Check if the word or combined line is too wide for the canvas
        if (testWidth > canvas.width && line !== '') {
            // Draw the current line and move to the next line
            ctx.fillText(line, 0, y);
            y += lineHeight; // Move to the next line
            line = words[i] + ' '; // Start the new line with the current word
        } else {
            line = testLine; // Continue adding words to the line
        }
    }

    // Handle the case where the last line is not drawn yet
    ctx.fillText(line, 0, y);

    // Set the download link to allow the user to download the generated image
    const downloadLink = document.getElementById('download');
    downloadLink.href = canvas.toDataURL('image/png'); // Convert canvas to image
}
