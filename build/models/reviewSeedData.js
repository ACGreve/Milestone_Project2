"use strict";
//Current date object info From google search how to get the current date in javascript
var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var fullYear = today.getFullYear();
//how to get current time in javascript from Google search
var time = new Date();
var currentTime = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds();
today = "".concat(month, "/").concat(day, "/").concat(fullYear, " at ").concat(currentTime);
console.log(today);
module.exports = [
    {
        title: 'Avengers review',
        name: 'Brandon',
        comment: 'Hi i loved this movie',
        dateMade: today
    },
    {
        title: 'Barbie review',
        name: 'Amelia',
        comment: 'Loved this movie',
        dateMade: today
    },
    {
        title: 'Spongebob review',
        name: 'Nate',
        comment: 'Hated this movie',
        dateMade: today
    }
];
