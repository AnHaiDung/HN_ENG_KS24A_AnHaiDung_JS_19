let aNumber = +prompt("Nhap vao so thu nhat");
let bNumber = +prompt("Nhap vao so thu hai");
let cNumber = +prompt("Nhap vao so thu ba");

// if(aNumber > bNumber && aNumber > cNumber){
//     document.write(`so lon nhat la: ${aNumber}`)
// } else if (bNumber > aNumber && bNumber > cNumber) {
//     document.write(`so lon nhat la: ${bNumber}`)
// } else if (cNumber > aNumber && cNumber > bNumber) {
//     document.write(`so lon nhat la: ${cNumber}`)
// }

aNumber > bNumber && aNumber > cNumber ? document.write(`so lon nhat la: ${aNumber}`) : bNumber > aNumber && bNumber > cNumber ? document.write(`so lon nhat la: ${bNumber}`) : document.write(`so lon nhat la: ${cNumber}`)