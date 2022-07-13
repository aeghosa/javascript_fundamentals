# Functions as values

Challenge
You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. To complete this exercise, you'll have to pass a function as an argument to another function.

Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
Use the function notify with the two previous functions to:
send an email to hello@makers.tech.test and get the expected output.
send a text to +10000000000 and get the expected output.


# Callbacks

Challenge
In this challenge you'll need to use the function `setInterval`. It works the same way as `setTimeout`, but rather than executing the given function once after a delay, it executes it repeatedly. For example, if we give 2000 for the number of milliseconds, the function will execute every 2 seconds:

setInterval(myFunction, 2000); // myFunction will execute every 2 seconds

n a new file counter.js:

Declare a variable `counter` initialised at the value 0 — this value will need to change, so use `let` rather than `const`.
Declare a function called `increment` that:
increments the value of `counter` by 1
and prints it using `console.log`
Using `setInterval`, call this function every second so the counter is incremented and printed every second.
If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:

$ node counter.js
1
2
3
(...)