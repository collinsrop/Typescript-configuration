"use strict";
let userInfo = [
    { name: "John", age: 24, complexion: "dark" },
    { name: "Anne", age: 23, complexion: "light" },
    { name: "Daniel", age: 14, complexion: "white" },
];
console.log(userInfo.map(u => u.name));
let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let currentDay = new Date().getDay();
let dayOfTheWeek = weeks[currentDay];
console.log(dayOfTheWeek);
console.log(new Date().getSeconds());
