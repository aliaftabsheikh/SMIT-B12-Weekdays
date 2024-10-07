// var date = new Date(); 

// console.log(date.toString());

// console.log(date.getDate());
// var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(weekdays[date.getDay()]);
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// console.log(months[date.getMonth()]);

// console.log(date.getFullYear());

// console.log(date.getHours() );
// console.log(date.getMinutes() );
// console.log(date.getSeconds())

// console.log(date.getMilliseconds())
// console.log(date.getHours());

// console.log(Math.floor(date.getTime() /  (1000 * 60 * 60 * 24 * 365.25)) )


// var doomsday = new Date("Jun 30, 2035")
// console.log(doomsday);

// var currms = date.getTime()
// var dmdms = doomsday.getTime()

// var Dfms = dmdms - currms

// console.log(Dfms / (1000 * 60 * 60 * 24 * 365.25));


var date = new Date(); 
date.setMonth(10)
date.setDate(10)
date.setFullYear(2020)
date.setHours(8)
date.setMinutes(20)
date.setSeconds(29);

console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toTimeString());