// The line below ensures that no JavaScript will run
// until the document (the web page) is completely
// loaded and the DOM is ready to access. We put all
// our JavaScript initialization code inside the curly
// braces of the ready function.
$(document).ready(function () {
    // event handlers
    $("button").on("click", calculateTrip);
});

function calculateTrip() {
    /*
     GATHER INPUT FROM WEB PAGE
     */
    // Get the value from the input box with id="miles"
    // Convert to a number data type (including decimals)
    let milesDriven = parseFloat( $("#miles").val() );

    console.log("Miles driven: " + milesDriven);

    // Get the value from the input box with id="mpg"
    // Convert to a number data type (including decimals)
    let milesPerGallon = parseFloat( $("#mpg").val() );

    console.log("Miles per gallon: " + milesPerGallon);

    // Get the value from the input box with id="mph"
    // Convert to a number data type (truncating decimals)
    let milesPerHour = parseInt( $("#mph").val() );

    // Get the value from the input box with id="dpg"
    // Convert to a number data type (including decimals)
    let dollarsPerGallon = parseFloat( $("#dpg").val() );

    /*
    PERFORM CALCULATIONS AND DISPLAY OUTPUT
     */

    // Calculate the total hours for the trip
    let hours = milesDriven / milesPerHour;

    // Round the hours to one decimal place for display
    // Update the text in the span with id="tripHours"
    $("#tripHours").text(hours.toFixed(1));

    // Calculate the total gas used
    let totalGallonsUsed = milesDriven / milesPerGallon;

    // Calculate the cost for that many gallons
    let costOfGas = totalGallonsUsed * dollarsPerGallon;

    // Round the cost to dollars/cents for display
    // Update the text in the span with id="tripCost"
    $("#tripCost").text(costOfGas.toFixed(2));

    // Unhide the results div
    $(".output").show();
}