// Question 01

var str1 = "Today is"
var str2 = "A beautiful day"
var str3 = "In Hawaii"

var res = str1 + " " + str2.charAt(0).toLowerCase() + str2.slice(1) + " " + str3.charAt(0).toLowerCase() + str3.slice(1)

console.log(res)

// Question 02

var mStr = 'Mo Tu We Th Fr Sa Su'
mStr = mStr.toUpperCase()
var days = mStr.split(" ")
console.log(days)