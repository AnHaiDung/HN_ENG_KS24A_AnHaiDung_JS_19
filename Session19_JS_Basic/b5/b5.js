let myStr = prompt("nhap 1 chuoi bat ki");
let count = 0;
for (let i=0 ; i<myStr.length ;i++){
    if (myStr[i] == " "){
        document.write("chuoi chua dau cach");
        count = 1;
        break;
    }
}
if (count == 0){
    document.write("chuoi khong chua dau cach");
}