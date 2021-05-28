# Asynchronous Programming in JS using Promises
A Promise is a mechanism frequently used in JavaScript to handle asynchronous processes; that is, promises are how we reason about the business of waiting.
​
Actually promises are simple state machines with three possible states:
​
- Pending
- Resolved
- Rejected
​
Resolved and rejected are ***final*** states, which means that once a promise gets to one of these states, it absolutely cannot go to any other state. Pending can go either way.  
A promise that is either resolved or rejected may also have a ***payload***, a value that it carries.  It's a little like an array that can only contain one value.  It's that the value be `undefined`, but that's still a value.
​
## Part A
In this part of exercise we need to make a promise and not interested on consuming the return value.
​
### Exercise 1
​
1. Use [Promise.resolve(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and resolve the value 'Resolve value'. 
​
2. Use [Promise.reject(error)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) and reject the value 'Reject value'.
​
​
### Exercise 2
​
Create a function `constructorPromise` and return a promise out of it.
​
Use the [Promise constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to create a promise that:
​
1. Resolve the value 'Success' if variable cond is truthy
2. Reject the value 'Error' if variable cond is falsy
3. Repeat part 1 and 2 of this exercise with a 3s delay before resolve or reject. (If you want to simulate the waiting time, a common approach is using setTimeout() method.)
​
​
## Part B
This part of exercise focus on consuming promises with `.then` and `.catch` methods and `async`/`await`. These methods are very important, not only in consuming but for transforming and combining promises.
​
### Exercise 1
Try to log the return value of a promise into console without using then/catch or async/await. 
1. what is the return value?
2. why this value is returned?
​
### Exercise 2
​
1. Please log the return value of an example promise which resolved/rejected after 3s delay into console.
2. Rpeate the part 1 of this exercise, but this time use `async` and `await`.
​
​
## Part C
In this part of exercise we want to focus on [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining). Actually, whenever we have a sequence of asynchronous tasks that needs to be performed one after another, we can using promise chaining.
​
### Exercise 1
Please define 3 promises with names `promise_1`, `promise_2`, `promise_3`
1. Each of these promises should resolve a numeric value after same amount of waiting time (e.g promise_1 should resolve value '1' after 1 second)
2. Please chain these promises into each other in a way that the one with bigger waiting time resolved first and the one with lowest waiting time resolve last.
​
​
​
# 