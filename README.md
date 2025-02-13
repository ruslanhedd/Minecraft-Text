# Text to Image Generator

This project is a simple web-based tool that allows you to create a 128x128 image with any text you input. You can download the generated image and use it for various purposes, such as creating a newspaper that can be converted into a map in Minecraft using some plugins.

## Features

- Input any text to generate a 128x128 image.
- Download the generated image as a PNG file.
- Word wrapping to fit text within the image dimensions.

## Usage

1. Open the `index.html` file in your web browser.
2. Enter your desired text in the input field.
3. The image will be generated automatically as you type.
4. Click the "Download Image" link to download the generated image.

## Project Structure

- `index.html`: The main HTML file containing the structure, styles, and JavaScript code for the text to image generator.

## How It Works

The project uses an HTML5 `<canvas>` element to draw the text onto a 128x128 image. The text is split into words and drawn line by line with word wrapping to ensure it fits within the image dimensions. The generated image can then be downloaded as a PNG file.

## License

This project is licensed under the MIT License.
