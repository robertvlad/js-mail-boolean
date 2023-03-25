const mail_array = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com', 'mail4@gmail.com', 'mail5@gmail.com'];

let check_btn = document.getElementById('check-btn');

check_btn.addEventListener ('click', function () {

    let input_value = document.getElementById('mail').value;
    let flag;
    let confirm = document.getElementById('confirm');

    for (let i = 0; i < mail_array.length; i++) {

        if (mail_array[i] === input_value) {

            flag = true;
        };
    };

    if (flag) {
        confirm.innerHTML = 'La mail inserita è presente';
    }
    else {
        confirm.innerHTML = 'La mail inserita non è presente';
    }
});