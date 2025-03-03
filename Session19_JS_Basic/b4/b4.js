let myNumber = Number(prompt("nhap so bat ki"));
if(myNumber % 3 == 0 && myNumber % 5 == 0){
    document.write(`${myNumber} chia het cho ca 3 va 5`);
} else {
    document.write(`${myNumber} khong chia het cho ca 3 va 5`);
}