function calculateTrip() {
    /*
     GATHER INPUT FROM WEB PAGE
     */
    // Get the value from a prompt
    let milesDriven = prompt("How many miles did you drive?");

    // Convert to a number data type (including decimals)
    milesDriven = parseFloat(milesDriven);

    // Get the value from a prompt
    let milesPerGallon = prompt("What MPG does your vehicle get?");

    // Convert to a number data type (including decimals)
    milesPerGallon = parseFloat(milesPerGallon);

    // Get the value from a prompt
    let milesPerHour = prompt("What is the average speed in MPH?");

    // Convert to a number data type (truncating decimals)
    milesPerHour = parseInt(milesPerHour);

    // Get the value from a prompt
    let dollarsPerGallon = prompt("How much does gas cost per gallon?");

    // Convert to a number data type (including decimals)
    dollarsPerGallon = parseFloat(dollarsPerGallon);

    /*
    PERFORM CALCULATIONS AND DISPLAY OUTPUT
     */

    // Calculate the total hours for the trip
    let hours = milesDriven / milesPerHour;

    // Calculate the total gas used
    let totalGallonsUsed = milesDriven / milesPerGallon;

    // Calculate the cost for that many gallons
    let costOfGas = totalGallonsUsed * dollarsPerGallon;

    // Round the hours to one decimal place for display
    let hoursDisplay = hours.toFixed(1);

    // Round the cost to dollars/cents for display
    let costOfGasDisplay = costOfGas.toFixed(2);

    // Display an alert with the total hours
    alert(`Your trip will take ${hoursDisplay} hours.`);

    // Display an alert with the trip cost
    alert(`Your trip will cost $${costOfGasDisplay} for gas.`);
}