function tinhsongay() {
    let thang = document.getElementById('month').value;
    switch (thang) {
        case "1":
            document.getElementById("result").innerText = 'Thang 1 co 31 ngay';
            break;
        case "2":
            document.getElementById('result').innerText = 'Thang 2 co 28 ngay';
            break;
        case "3":
            document.getElementById('reslut').innerText = 'Thang 3 co 31 ngay';
            break;
        case "4":
            document.getElementById('result').innerText = 'Thang 4 co 30 ngay';
            break;
        case "5":
            document.getElementById('result').innerText = 'Thang 5 co 31 ngay';
            break;
        case "6":
            document.getElementById('result').innerText = 'Thang 6 co 30 ngay';
            break;
        case "7":
            document.getElementById('result').innerText = 'Thang 7 co 31 ngay';
            break;
        case "8":
            document.getElementById('result').innerText = 'Thang 7 co 31 ngay';
            break;
        case "9":
            document.getElementById('result').innerText = 'Thang 7 co 30 ngay';
            break;
        case "10":
            document.getElementById('result').innerText = 'Thang 7 co 31 ngay';
            break;
        case "11":
            document.getElementById('result').innerText = 'Thang 7 co 30 ngay';
            break;
        case "12":
            document.getElementById('result').innerText = 'Thang 7 co 31 ngay';
            break;
        default:
            document.getElementById('result').innerText = 'Khong phai thang';
    }
}