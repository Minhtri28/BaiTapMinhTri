function main() {
    let size = 5;
    let min = 10;
    let max = 90;
    let matrix = generateMatrix(size, min, max);
    printMatrix(matrix);
    document.write(`Tổng các số chẵn trong ma trận: ${totalEvenValues(matrix)} <br>`);
    document.write(`Tổng các giá trị trên đường chéo chính: ${totalValueOnPrimary(matrix)} <br>`);
    document.write(`Tổng các giá trị trên đường chéo phụ: ${totalValuesOnSecondary(matrix)} <br>`);
    document.write(`Tổng các giá trị trên đường biên: ${totalBorderMatrix(matrix)} <br>`);
    printPrimaryMatrix(matrix);
    document.write(`-------------------------------<br>`);
    printSecondaryMatrix(matrix);
}
main();

function generateMatrix(size, min, max) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let j = 0; j < size; j++) {
            arr[j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function isEvenValue(number) {
    return number % 2 == 0;
}

function totalEvenValues(matrix) {
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (isEvenValue(matrix[i][j])) {
                total += matrix[i][j];
            }
        }
    }
    return total;
}

function totalValueOnPrimary(matrix) {
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        total += matrix[i][i];
    }
    return total;
}

function totalValuesOnSecondary(matrix) {
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        total += matrix[size - i - 1][i];
    }
    return total;
}

function totalBorderMatrix(matrix) {
    let total = 0;
    let size = matrix.length;
    for (let j = 0; j < size; j++) {
        total += matrix[0][j] + matrix[size - 1][j];
    }
    for (let i = 1; i < size - 1; i++) {
        total += matrix[i][0] + matrix[i][size - 1];
    }

    return total;
}
 
function printMatrix(matrix) {
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            document.write(`${matrix[i][j] }    `);
        }
        document.write('<br>');
    }
}


function printPrimaryMatrix(matrix) {
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i >= j) {
                document.write(`${matrix[i][j] }    `);
            }
        }
        document.write('<br>');
    }
}

function printSecondaryMatrix(matrix) {
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i <= j) {
                document.write(`${matrix[i][j] }    `);
            } else {
                document.write(`---    `);
            }
        }
        document.write('<br>');
    }
}