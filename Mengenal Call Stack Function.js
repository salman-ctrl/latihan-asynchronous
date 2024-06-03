function firstFunction() {
    console.log('Masuk ke firsFunction');
    secondFunction();
    console.log('Keluar dari firstFunction');
}

function secondFunction() {
    console.log('Masuk ke secondFunction');
    thirdFunction();
    console.log('Keluar dari secondFunction');
}

function thirdFunction() {
    console.log('Masuk ke thirdFunction');
    //Di sini tidak ada panggilan fungsi lain, jadi akan kembali
    console.log('keluar dari thirdFunction');
}
firstFunction();

function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(6))

setTimeout(() => {
    
}, (function){
    n = console.log('settime out menggunakan')
    re
});

function greet() {
    console.log('hello');
}
function goodBye() {
    console.log('good bye');
}
function conversation() {
    goodBye();
    greet();
}

conversation();

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(911))
function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

console.log(factorial(911).toString());
