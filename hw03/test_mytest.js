var cryptoCurr = require('./cryptoCurr');

var alice = new cryptoCurr.CoinClient('./alicePriv.txt', './alicePub.txt', {port: 9000});
var bob = new cryptoCurr.CoinClient('./bobPriv.txt', './bobPub.txt', {port: 9001});

// Silencing alice
// alice.log = function() {}

// console.log("step 1")
alice.transferFunds({'404f8fd144': 100, '07f946d659': 30, 'c214b8bfb6': 2});

// console.log("step 2")
setTimeout(function() {
  alice.transferFunds({'404f8fd144': 90, '07f946d659': 10, 'c214b8bfb6': 0})
} , 400);

// console.log("step 3")
setTimeout(function() {
  alice.transferFunds({'404f8fd144': 40, '07f946d659': 10, 'c214b8bfb6': 40})
} , 500);

// Rejected as invalid
// console.log("step 4")
setTimeout(function() {
  alice.transferFunds({'404f8fd144': 400, '07f946d659': 0, 'c214b8bfb6': 0})
} , 600);


console.log("End");
