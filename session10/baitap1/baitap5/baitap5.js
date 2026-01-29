const rate = 25000;
let usd = prompt("Nhập số tiền usd:");
usd = Number(usd);
let vnd = usd * rate;
document.writeln(usd + "USD = " + vnd + "VND");