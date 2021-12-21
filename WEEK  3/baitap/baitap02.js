let max = 40;
let min = 10;
let arrs = [];
let sum = 0;
let tich = 0;
let size = 5;
for (let n = 0; n < size; n++) {
    let arr2 = [];
    for( let j = 0; j < size; j++) {
        arr2[j] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    arrs[n] = arr2
}
console.log(arrs)

for (let i = 0; i < arrs.length; i++) {
    for ( let j = 0; j < arrs.length; j++) {
        sum += parseInt(arrs[i][j])
    }
}
console.log(sum)

// for(let i = 0; i < arrs.length; i++) {
//     for (let j = 0; j < arrs.length; j ++) {
//         tich *= (arrs[i][j])
//     }
// } 
// console.log(tich)