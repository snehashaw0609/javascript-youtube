const accountId = 144553
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed

accountEmail = "sgh@e.com"
accountPassword = "212121221"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);