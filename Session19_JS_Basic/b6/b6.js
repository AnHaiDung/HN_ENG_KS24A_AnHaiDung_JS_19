
let aValue = prompt("nhap a : ");
let bValue = prompt("nhap b : ");
let cValue = prompt("nhap c : ");
aValue = Number(aValue);
bValue = Number(bValue);
cValue = Number(cValue);
let denta = bValue**2 - 4 * aValue * cValue ;
if (aValue == 0 ){
    document.write("khong phai phuong trinh ba 2");
} else {
    if(denta > 0){
        let x1 = (-bValue + Math.sqrt(denta)) / (2 * aValue) ;
        let x2 = (-bValue - Math.sqrt(denta)) / (2 * aValue) ;
        document.write(` x1: ${x1} ` + "<br/>");      
        document.write(` x2: ${x2} `);
    } else if (denta == 0){
        let x = -bValue / (2 * aValue);
        document.write(`x1 = x2 = ${x}`);
    } else {
        document.write("vo nghiem");
    }
}