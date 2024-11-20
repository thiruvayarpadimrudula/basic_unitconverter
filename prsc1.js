function getFromUnit() {
    let fromUnit = document.getElementById("fromUnitSelect").value;
    if (document.getElementById("fromUnitText").style.display !== 'none') {
        fromUnit = document.getElementById("fromUnitText").value.toLowerCase();
    }
    return fromUnit;
}

function getToUnit() {
    let toUnit = document.getElementById("toUnitSelect").value;
    if (document.getElementById("toUnitText").style.display !== 'none') {
        toUnit = document.getElementById("toUnitText").value.toLowerCase();
    }
    return toUnit;
}

function updateFromUnit() {
    document.getElementById("fromUnitSelect").style.display = 'none';
    document.getElementById("fromUnitText").style.display = 'block';
}

function updateToUnit() {
    document.getElementById("toUnitSelect").style.display = 'none';
    document.getElementById("toUnitText").style.display = 'block';
}

function convert() {
    const category = document.getElementById("category").value;
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = getFromUnit();
    const toUnit = getToUnit();

    let result = '';
    //length
    if (category === "length") {
        const lengthConversions = {
            meters: 1,
            kilometers: 1000,
            centimeters: 0.01,
            millimeters: 0.001,
            inches: 0.0254,
            feet: 0.3048,
            yards: 0.9144,
            miles: 1609.34
        };

        if (lengthConversions[fromUnit] && lengthConversions[toUnit]) {
            result = value * lengthConversions[toUnit] / lengthConversions[fromUnit];
            result = `${value} ${fromUnit} = ${result} ${toUnit}`;
        } else {
            result = "Invalid unit for length.";
        }
    }

    // Weight
    else if (category === "weight") {
        const weightConversions = {
            grams: 1,
            kilograms: 1000,
            milligrams: 0.001,
            pounds: 453.592,
            ounces: 28.3495,
            stones: 6350.29
        };

        if (weightConversions[fromUnit] && weightConversions[toUnit]) {
            result = value * weightConversions[toUnit] / weightConversions[fromUnit];
            result = `${value} ${fromUnit} = ${result} ${toUnit}`;
        } else {
            result = "Invalid unit for weight.";
        }
    }

    // Temperature
    else if (category === "temperature") {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (value * 9/5) + 32;
            result = `${value} °C = ${result} °F`;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (value - 32) * 5/9;
            result = `${value} °F = ${result} °C`;
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            result = value + 273.15;
            result = `${value} °C = ${result} K`;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            result = value - 273.15;
            result = `${value} K = ${result} °C`;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            result = (value - 32) * 5/9 + 273.15;
            result = `${value} °F = ${result} K`;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            result = (value - 273.15) * 9/5 + 32;
            result = `${value} K = ${result} °F`;
        } else {
            result = "Invalid unit for temperature.";
        }
    }

    // Display result
    document.getElementById("result").innerText = result || "Please check the inputs!";
}
