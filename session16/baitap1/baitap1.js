
function processConfirm(answer) {
    let result;

    if (answer === true) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }

    return result;
}

// Gọi hàm confirm để nhận thông tin từ người dùng
let answer = confirm("Do you want to play a game?");

// Gọi hàm processConfirm và hiển thị kết quả
let message = processConfirm(answer);
alert(message);
