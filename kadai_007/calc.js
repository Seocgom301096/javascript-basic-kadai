let num = Math.floor(Math.random(1) * 15);

//3と5の倍位数のとき
if (num % 3 ===0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}

//3の倍数のとき
else if (num % 3 === 0) {
    console.log("3の倍数です");
}

//5の倍数のとき
else if (num % 5 === 0) {
    console.log("5の倍数です");
}

//それ以外(変数の値を出力)
else { 
    console.log(num);
}
