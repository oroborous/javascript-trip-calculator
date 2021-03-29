function calculateTrip() {
    /*
     GATHER INPUT FROM WEB PAGE
     */
    // Get the value from a prompt
    // Convert to a number data type (including decimals)
    let milesDriven = parseFloat( prompt("How many miles did you drive?") );

    // Get the value from a prompt
    // Convert to a number data type (including decimals)
    let milesPerGallon = parseFloat( prompt("What MPG does your vehicle get?") );

    // Get the value from a prompt
    // Convert to a number data type (truncating decimals)
    let milesPerHour = parseInt( prompt("What is the average speed in MPH?") );

    // Get the value from a prompt
    // Convert to a number data type (including decimals)
    let dollarsPerGallon = parseFloat( prompt("How much does gas cost per gallon?") );

    /*
    PERFORM CALCULATIONS AND DISPLAY OUTPUT
     */

    // Calculate the total hours for the trip
    let hours = milesDriven / milesPerHour;

    // Calculate the total gas used
    let totalGallonsUsed = milesDriven / milesPerGallon;

    // Calculate the cost for that many gallons
    let costOfGas = totalGallonsUsed * dollarsPerGallon;

    // Display an alert with the total hours
    // Round the hours to one decimal place for display
    alert(`Your trip will take ${hours.toFixed(1)} hours.`);

    // Display an alert with the trip cost
    // Round the cost to dollars/cents for display
    alert(`Your trip will cost $${costOfGas.toFixed(2)} for gas.`);
}