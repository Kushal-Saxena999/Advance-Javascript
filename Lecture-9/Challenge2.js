// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.



// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".



// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.



//1st Way

function createCounter() {
  let count = 0; // Initialize a private counter variable
  return function() {
      count += 1; // Increment the counter
      return count; // Return the current value of the counter
  };
}


function rateLimiter(fn, limit) {
  let lastCallTime = 0; // Track the time of the last function call

  return function(...args) {
      const currentTime = Date.now(); // Get the current time

      // Check if the time since the last call is less than the limit
      if (currentTime - lastCallTime < limit) {
          return "Rate limit exceeded"; // Return message if within limit
      }

      lastCallTime = currentTime; // Update last call time
      return fn(...args); // Call the original function with provided arguments
  };
}



function memoize(fn) {
  const cache = new Map(); // Create a cache to store results

  return function(...args) {
      const key = JSON.stringify(args); // Create a unique key based on arguments

      // Check if the result for these arguments is already cached
      if (cache.has(key)) {
          return cache.get(key); // Return cached result if available
      }

      const result = fn(...args); // Call the original function
      cache.set(key, result); // Store the result in cache
      return result; // Return the result
  };
}

//2nd Way

function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
 
function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return 'Rate limit exceeded';
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}
 
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}