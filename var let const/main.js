// ini yang terjadi
var i;
console.log(i)
i = 19;

// ini yang di tulis j=i
console.log(j)
var j = 19
// kenapa hasilnya adalah undifined, karena yang terjadi ketika 
// kita menggunakan var, maka var akan di hoisting terlebih dahulu
// lalu dia di berikan nilai 'undifined', lalu console.log(i) di 
// jalankan. menghasilkan nilai 'undefined' lalu setelah itu
// i baru di isi dengan 19;

// perilaku ini tidak baik, karena pada umumnya variable yang 
// di panggil duluan sebelum di deklarasikan itu harusnya error
// namun dalam javascript hal ini di toleransi, ini tidak umum
// terjadi. oleh karena itu ganti var menjadi let atau const

// console.log(l)
// let l = 19

// masalah lain yang pada umumnya ada di bahasa pemrograman lain
// di toleransi juga oleh javascript, yaitu block scope.
// dalam javascript variable yang ada dalam block scope, masih bisa di
// akses walaupun berada di luar block scope tersebut, oleh karena itu
// programer javacript mengakalinya dengan menggunakan SIAF / IIFE
// Self Invoking Anonymous Function / Immidiately Invoked Function Expression

// loop selesai di 9
for( var i = 0; i < 10; i++){
    console.log(i);
}

// lalu ku panggil 10 nya di luar block scope dan BISA
console.log(i);

// supaya tidak bisa pakai function scope.
// agar efektif pakai SIAF / IIFE
(function(){
    for( var k = 20; k < 30; k++){
        // console.log(k);
    }
}())
// console.log(k);

// ini cara jadul, sekarang pakai saja let dibanding kan var
for( let b = 0; b < 10; b++){
    console.log(b);
}

// console.log(b);
// kenapa let dapat menghasilkan sifat yang sama, karena
// let dan const bersifat block scope, berbeda dengan let yang msih
// function scope

// kenapa var masih menggunakan function scope?
// kerena javascript di bikin selama 10 hari. hahahah gila

// const adalah variable yang tidak bisa akan diubah value nya.
// eh bisa ji tapi nda bisa kayak buat ulang variablenya kayak timpa maksudku

const a = 3.14

console.log(a)

