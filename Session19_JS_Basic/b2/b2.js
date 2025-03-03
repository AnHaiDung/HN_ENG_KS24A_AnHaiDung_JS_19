let input = prompt("nhap chuoi hoac 1 ky tu bat ki");
let count= 1;
for (let i=0 ; i<input.length ;i++){
    if (!isNaN(input[i]) || input[i] == " "){
        document.write(`${input} khong phai chu cai`);
        count = 0;
        break;
    }
}
if (count == 1){
    document.write(`${input} la chu cai .`);
}