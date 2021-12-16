// cau 1 -
//viết chương trình tạo ra mãng có n phần tử và các giá trị được sinh ngẫu nhiên từ 10 đến 90
let ramdom = [];

for (let m = 0; m < 10; m++) {
    ramdom.push(Math.floor(Math.random() * 90) + 10);
}
ramdom.sort(function(a,b) {
    return a - b 
})
console.log(ramdom);

// cau 2
// Tính tổng các giá trị có trong mảng
let sum = 0
    for(let i = 0; i < ramdom.length; i ++) {
        sum += parseInt(ramdom[i], 10  )
    }
    console.log('Tổng của mảng ramdom là :' + sum)

// let a = ( n * 2) 
// console.log(a)
// cau 3
// Tạo ra mảng mới giả trị mảng bằng mảng 1 x 2
let neW = []
    for ( let a of ramdom) {
        neW.push(a * 2)

    }
    console.log(neW)
// cau 4
// tạo ra biến x và gán cho 1  giá trị, kiểm tra x có tồn tại trong mảng hay không
let x = Number(prompt('Nhập số bạn muốn'))
    if ( ramdom.indexOf(x) != -1) {
        console.log('x Thuộc mảng ramdom')
    } else {
        console.log('x Không thuộc mảng ramdom')
    }
    // if (x == ramdom) {
    //     console.log('bien x ton tai trong mang')
    // } else {
    //     console.log('bien x khong ton tai trong mang')
    // }
    // function contains(ramdom,x) {
    //     for (let y = 0; y < ramdom.length; y++) {
    //         if (ramdom[y] === x) {
    //             console.log('x thuoc mang ')
    //         }
    //     }
    //     console.log('x khong thuoc mang')
    // }
    // console.log(ramdom == x)
    // console.log(JSON.stringify(ramdom) == JSON.stringify(x))
    