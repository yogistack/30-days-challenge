
// Reversed Number Pattern using Nested for Loop
for (let x = 5; x >= 1; x--) {  

     let row = "";

 for (let y = 5; y >= x; y--) {

      row += y;
 }
   console.log(row);
}

// 1. Outer loop-initialise starts from 5, condition countinues until x becomes lessthan 1.
// 2. Empty string used to store numbers.
// 3. Inner loop-initialise starts from 5, condition countinues until y becomes greater than 1.
// 4. Adds the current value of y.
// 5. Print the row