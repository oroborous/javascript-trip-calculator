// The line below ensures that no JavaScript will run
// until the document (the web page) is completely
// loaded and the DOM is ready to access. We put all
// our JavaScript code and functions inside the curly
// braces of the ready function.
$(document).ready(function () {
    // event handlers
    $("button").click(calculateTrip);

    function calculateTrip() {
        /*
         GATHER INPUT FROM WEB PAGE
         */
        // Get the value from the input box with id="miles"
        let milesDriven = $("#miles").val();

        // Convert to a number data type (including decimals)
        milesDriven = parseFloat(milesDriven);

        // Get the value from the input box with id="mpg"
        let milesPerGallon = $("#mpg").val();

        // Convert to a number data type (including decimals)
        milesPerGallon = parseFloat(milesPerGallon);

        // Get the value from the input box with id="mph"
        let milesPerHour = $("#mph").val();

        // Convert to a number data type (truncating decimals)
        milesPerHour = parseInt(milesPerHour);

        // Get the value from the input box with id="dpg"
        let dollarsPerGallon = $("#dpg").val();

        // Convert to a number data type (including decimals)
        dollarsPerGallon = parseFloat(dollarsPerGallon);

        /*
        PERFORM CALCULATIONS AND DISPLAY OUTPUT
         */

        // Calculate the total hours for the trip
        let hours = milesDriven / milesPerHour;

        // Round the hours to one decimal place for display
        let hoursDisplay = hours.toFixed(1);

        // Update the text in the span with id="tripHours"
        $("#tripHours").text(hoursDisplay);

        // Calculate the total gas used
        let totalGallonsUsed = milesDriven / milesPerGallon;

        // Calculate the cost for that many gallons
        let costOfGas = totalGallonsUsed * dollarsPerGallon;

        // Round the cost to dollars/cents for display
        let costOfGasDisplay = costOfGas.toFixed(2);

        // Update the text in the span with id="tripCost"
        $("#tripCost").text(costOfGasDisplay);

        // Unhide the results div
        $(".output").show();
    }

});