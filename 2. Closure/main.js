// 2. execution context, hoisting, & scope

// console.log(nama);
// var nama = "ryan";

// creation phase in global context
// nama var = undifined
// nama function = fn()
// hoisting ^
//          |

// window = global object
// this = window
// kedua ini pasti dibuat ketika javascript dijalankan

// execution phase top to bottom
// console.log(hbd())

// var umur = 30;

// function hbd(){
//     return `halo ${nama}! selamat ulangtahun yang ke ${umur}!`
// }
// function membuat local execution context
// yang di dalamanya terdapat creation dan execution phase
// dapat mengakses window dan "arguments" yang berisi apapun yang kita masukkan sebagai parameter
// hoisting

var nama = "ryan";
var username = "@mht.aryn";

function cetakUrl(){

    var urlIG = `https://instagram.com/profile/${username}`;
    console.log(arguments);

    return urlIG;
}

console.log(cetakUrl("@arryyxia", "@align.space"))

// function a(){
//     console.log("ini adalah function a")
//     function b(){
//         console.log("ini adalah function b")
//         function c(){
//             console.log("ini adalah function c")
//         }
//         c()
//     }
//     b()
// }
// a()
// tumpukan exekusi
// satu satu di eksekusi lalu di hilangkan setelah ter eksekusi



function init(){
    // let nama = "ryan"
    return function (nama){
        console.log(nama)
    }
}

// function factory
let panggilNama = init()
// panggilNama('sadasd')

// kenapa membuat closure
// 1. untuk membuat function factory
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`halo ${nama}, selamat ${waktu}, semoga hari mu menyenangkan`)
    }
}

let selamatPagi = ucapkanSalam("pagi")
let selamatSiang = ucapkanSalam("siang")
let selamatMalam = ucapkanSalam("malam")

console.dir(selamatPagi("reja"))

console.log(padail);
var padail = "nama"














