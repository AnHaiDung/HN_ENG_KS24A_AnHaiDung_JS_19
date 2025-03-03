let myMonth = Number(prompt("nhap vao 1 thang bat ki"));
switch (myMonth) {
    case 1:
    case 2:
    case 3:
        document.write(`Mua Xuan`);
        break;
    case 4:
    case 5:
    case 6:
        document.write(`Mua Ha`);
        break;
    case 7:
    case 8:
    case 9:
        document.write(`Mua Thu`);
        break;
    case 10:
    case 11:
    case 12:
        document.write(`Mua Dong`);
        break;
    default:
        document.write(`thang khong hop le`);
        break;
}