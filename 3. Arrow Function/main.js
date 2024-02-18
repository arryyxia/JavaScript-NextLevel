// arrow function
// cara yang lebih ringkas di bandingkan function expression

// 1 param tidak butuh kurung, tidak butuh kurung kurawal, dan return
const haiHero = nama => `Halo bang ${nama}`
// implisit return
console.log(haiHero("brody"))

// dua butuh
const haiNama = (nama, lane) => { 
    return `Halo bang ${nama}, semangat jaga ${lane}`
}
console.log(haiNama("brody", "gold lane"))

// cara yang lebih ringkas lagi, jika tanpa param
const hai = () => "halo world";
console.log(hai())

let namaMahasiswa = ['ryan', 'alil', 'dhafin dzahin']
// let charNama = namaMahasiswa.map( nama => nama.length ) 

// console.log(charNama)

let tbNamaMahasiswa = namaMahasiswa.map(nama =>({
    nama, charNama: nama.length
}))
console.table(tbNamaMahasiswa)

// bagaimana jika kita menggunakan this?

// sekarang kit akan belajar konsep this pada arrow funciton
const Mahasiswa = function(){
    this.nama = 'ryan',
    this.umur = '18'
    this.hai  = function(){
        return `halo nama saya ${this.nama}, saya sekarang umur ${this.umur}`
    }
}

const ryan = new Mahasiswa();