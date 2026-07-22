//=========================================================//
//== Task 1: Flexible String Manipulation with Functions ==//
//=========================================================//
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatFullName (firstName, lastName) {
    if (firstName === undefined || lastName === undefined) {
        return "Invalid name input";
    } 
    return capitalizeFirstLetter(firstName) + ", " + capitalizeFirstLetter(lastName);
}
//========================//
//== Task 1: Test cases ==//
//========================//
console.log("---------------------------------");
console.log("Task 1 -> formatFullName : Test cases");
console.log(formatFullName("Mamadou Moussa", "Balde"));
console.log(formatFullName("mamadou", "balde"));
console.log(formatFullName("Mamadou Moussa"));

//==============================================================//
//== Task 2: Mathematical Operations with Multiple Parameters ==//
//==============================================================//
function calculateTotalCost (price, quantity, taxRate) {
if (
        typeof price !== "number" || Number.isNaN(price) ||
        typeof quantity !== "number" || Number.isNaN(quantity) ||
        typeof taxRate !== "number" || Number.isNaN(taxRate)
    )
     {
        return "Invalid input";
    }
    return (price * quantity) * (1 + taxRate);
}

//========================//
//== Task 2: Test cases ==//
//========================//
console.log("---------------------------------");
console.log("Task 2 -> calculateTotalCost : Test cases");
console.log(calculateTotalCost(10, 5, 0.08)); 
console.log(calculateTotalCost(10, 5, "0.1"));
console.log(calculateTotalCost(10, 5));


//==============================================================//
//== Task 3: Functions with Conditional Logic ==//
//==============================================================//
function checkEligibility (age, isEmployed) {
    if (age === undefined || isEmployed === undefined) {
        return "Invalid input";
    }
    if (age >= 18 && isEmployed === true) {
        return "You are Eligible";
    } else if (age >= 18 && isEmployed === false) {
        return "You are Conditionally eligible";
    }
    else {
        return "You are Not eligible";
    }
}

//========================//
//== Task 3: Test cases ==//
//========================//
console.log("---------------------------------");
console.log("Task 3 -> checkEligibility : Test cases");
console.log(checkEligibility(25, true));
console.log(checkEligibility(25, false));
console.log(checkEligibility(15, true));
console.log(checkEligibility(15, false));

//==============================================================//
//== Task 4: Functions with Conditional Logic ==//
//==============================================================//
function calculateTotalCostRefactored (price, quantity, taxRate, discount=0) {
    if (price === undefined || quantity === undefined || taxRate === undefined) {
        return "Invalid input";
    }
    return ((price * quantity) - discount) * (1 + taxRate);
}

//========================//
//== Task 4: Test cases ==//
//========================//
console.log("---------------------------------");
console.log("Task 4 -> calculateTotalCostRefactored : Test cases");
console.log(calculateTotalCostRefactored(10, 5, 0.08)); 
console.log(calculateTotalCostRefactored(10, 5, 0.1));
console.log(calculateTotalCostRefactored(10, 5));
console.log(calculateTotalCostRefactored(10, 5, 0.08, 4));