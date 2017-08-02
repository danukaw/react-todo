var moment = require('moment');

var now = moment();

console.log(now.format());

console.log(moment().unix());
//1501230236
var timestamp = 1501230236;
var currentNow = moment().unix(timestamp);

console.log("Current timestamp --> ",  moment().unix(timestamp));
