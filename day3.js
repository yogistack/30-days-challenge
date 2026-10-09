
// Find the first repeated number

// Code :
   
       let numbers = [4,7,2,9,7,5,2]
        let seen = {}
        let repeated                                               
        for(let f=0; f<numbers.length; f++){
            let currentNumber = numbers[f]
            if(seen[currentNumber]){
                repeated = currentNumber
                break
            }
            seen[currentNumber] = true
        }
        console.log(repeated);

// logic :
// 1. created an empty object and declared a variable 'repeated'.
// 2. start loop through the array elements and assign the current element (f) to 'currentNumber' - for this purpose i have used number [f] to get the current element  ( let currentNumber = numbers[f] )
// 3. if the currentNumber is already stored in seen, then assign that currentNumber to 'repeated' and stop the program using break
// 4. if the currentNumber is not in seen then store that number in seen as true. 
// ex:
// seen {
//     4: true,
//     7: true
// }
// 5. continue the process. if any true appears in if block it will set the number as repeated because true means the number is already in seen and the program will be stopped since it only asked for first repeated number