# basic_unitconverter

## Overview
The Unit Converter is a simple web application that allows users to convert various units in categories such as **Length**, **Weight**, and **Temperature**. It supports multiple units, including meters, kilometers, grams, kilograms, Celsius, Fahrenheit, and more.

## Features
- Choose from three conversion categories: Length, Weight, and Temperature.
- Convert between various units within each category.
- Supports dropdown input for units.
- Displays the result of the conversion in a readable format.

## Technologies Used
- **HTML**: Structure of the web page
- **CSS**: Styling of the web page
- **JavaScript**: Logic for unit conversion and dynamic updates

## Installation

### Requirements:
- A modern web browser (Chrome, Firefox, Edge, etc.)

### Steps:
1. Download or clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. The application should be ready to use immediately.

## Usage

1. Select the category (Length, Weight, or Temperature) from the dropdown.
2. Enter the value you want to convert in the "Enter Value" input box.
3. Select the unit you are converting from using the "From Unit" dropdown.
4. Select the unit you are converting to using the "To Unit" dropdown.
5. Press the **Convert** button to see the result.

### Example:
- For Length:
    - Select `Length` as the category.
    - Enter `5` in the "Enter Value" field.
    - Choose `Meters` as the "From Unit".
    - Choose `Kilometers` as the "To Unit".
    - The result will show `5 meters = 0.005 kilometers`.

- For Temperature:
    - Select `Temperature` as the category.
    - Enter `25` in the "Enter Value" field.
    - Choose `Celsius` as the "From Unit".
    - Choose `Fahrenheit` as the "To Unit".
    - The result will show `25 °C = 77 °F`.

## Functionality Details

- **Length Conversion**: 
    - The units supported are: Meters, Kilometers, Centimeters, Millimeters, Inches, Feet, Yards, Miles.
    - Conversion rates are predefined based on international standards.

- **Weight Conversion**: 
    - The units supported are: Grams, Kilograms, Milligrams, Pounds, Ounces, Stones.
    - Conversion rates are predefined.

- **Temperature Conversion**: 
    - The supported units are: Celsius, Fahrenheit, Kelvin.
    - Basic conversion formulas are used for the conversions between these units.

## Customization
You can add more units or categories by editing the dropdown options in the HTML and modifying the conversion logic in the JavaScript.

## Troubleshooting
- If you encounter issues where the conversion result is not displaying correctly, please check that all inputs are valid and selected correctly. Ensure the value field is a number, and the units are chosen from the dropdown menus.
