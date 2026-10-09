// patern printing
for(let i=1;i<=5;i++){
    let num=""
    for(let j=1;j<=i;j++){
 num +=j 
}
console.log(num);
}
//num=""
// first i=1,
// check 1<=5 true,
// then run inner loop
// j =1,check 1<=1 true
// num+=1
// print 1
//num=""
// first i=2,
// check 2<=5 true,
// then run inner loop
// j =1,check 1<=2 true
// num+=1
//j=2,check 2<=2 true
// num+=2
// 1
// 12
//num=""
// first i=3,
// check 3<=5 true,
// then run inner loop
// j =1,check 1<=2 true
// num+=1
//j=2,check 2<=2 true
// num+=2
//j=3,check 3<=3 true
// num+=3
// 1
// 12
// 123
//it will run until i=5 condition satisfy 5<=5 it will execute