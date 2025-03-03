let myMonth = Number(prompt("nhap vao 1 thang bat ki"));
switch (myMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write(`thang ${myMonth} co 31 ngay`);
        break;
    case 2:
        document.write(`thang ${myMonth} co 28 hoac 29 ngay nam nhuan`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write(`thang ${myMonth} co 30 ngay`);
        break;
    default:
        document.write(`thang khong hop le`);
        break;
}
