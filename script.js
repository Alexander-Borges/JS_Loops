//Print odds 1-20
//using a loop write code that will console.log all of the odd values from 1-20
for (let i=1;i<=20;i++) {
    if (i%2 !== 0) {
        console.log(i)
    }
}
console.log("============================")

//Decreasing multiples of 3
//Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0
for (let i=100; i>=0; i--) {
    if (i%3 === 0) {
        console.log(i)
    }
}
console.log("============================")

//Print the Sequence 
//Using a loop write code that will console.log the values in the sequence 4,2.5,1,-2,-3.5
for (let i=4;i>-4;i-=1.5) {
    console.log(i)
}
console.log("============================")

//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1+2+3+...+98+99+100. We should get back to 5050 at the end. 
let sum = 0;

for (let i =1; i<= 100; i++) {
    sum += i;
}
console.log(sum);
console.log("============================")

//Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1*2*3
let product = 1;
for (let i = 1; i<=12; i++) {
    product *= i;
}
console.log(product)