// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// global main
// extern fakebin

// section .bss
// buffer:    resb  64

// section .data
// digits:    db  "45385593107843568", 0h0

// section .text
// main:
//     mov rdi, digits
//     mov rsi, buffer
//     call fakebin        ; rax <- 01011110001100111
//     ret

function fakeBin(x) {
    let s = x.split('');
    let m = s.map((e) => {
        return parseInt(e, 10);
    });
    let fake = m.map((x) => {
        if (x < 5) {
            return x = 0;
        }
        else
            return x = 1;
    });
    return fake.join('');
}

// other solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}