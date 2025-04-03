const accountId = 14453;
let accountEmail = "aryangajjar1509@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;


//accountId = 1; //not allowed

accountEmail = "aryan@gmail.com";
accountPassword = "12567";
accountCity = "Ahemdabad";
accountState = "Gujarat"

console.log(accountId);

// Why we do not need to use Var because 
// of issue in block scope {} and functional scope

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);