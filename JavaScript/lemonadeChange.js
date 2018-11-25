// Task Description
// At a lemonade stand, each lemonade costs $5.
// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

var lemonadeChange = function(bills) {
    const register = {};

    for (let bill of bills) {
        if (!register.hasOwnProperty(bill)) register[bill] = 0;
        register[bill]++;
        if (bill == 10) {
            // customer needs $5 in change
            if (register[5] > 0) register[5]--;
            else return false;
        } else if (bill == 20) {
            // customer needs three $5 or one $5 and $10
            if (register[5] >= 1 && register[10] >= 1) {
                register[5]--;
                register[10]--;
            } else if (register[5] >= 3) {
                register[5] -= 3;
            } else return false;
        }
    }
    return true;
};

// Test Cases
lemonadeChange([5, 5, 5, 10, 20]); // true
lemonadeChange([5, 5, 10]); // true
lemonadeChange([10, 10]); // true
