// many ways to make an object in javascript

// 1. object literal
// let siswa = {
    // Properties are essentially variables that are attached to objects. 
    // nama: "anto",
    // kelas: "X tkj 1",
    // nilaiSemester1 : [92,94,96,100],
    //  Methods are functions that are attached to objects.
//     avgNilai: function(nilaiSemester1){
//         let totalNilai = 0
//         for(let i = 0; i < this.nilaiSemester1.length; i++){
//             totalNilai += this.nilaiSemester1[i]
//         }
//         return totalNilai / this.nilaiSemester1.length
//     }

// }
// let avg = siswa.avgNilai();
// console.log(avg)

// 2. function declaration
// let Siswa = function(nama, kelas, nilaiSemester1){
//     let siswa = {}
//     siswa.nama = nama
//     siswa.kelas = kelas
//     siswa.nilaiSemester1 = nilaiSemester1
//     siswa.avgNilai = function(){
//         let totalNilai = 0;
//         for (let i = 0; i < this.nilaiSemester1.length; i++){
//             totalNilai += this.nilaiSemester1[i]
//         }
//         return totalNilai / this.nilaiSemester1.length
//     }
//     return siswa;
// }

// let tambahSiswa = function(){
//     let k = 'siswa';
//     let jumlahSiswa = parseInt(prompt("Masukkan jumlah siswa yang akan di input :"));
//     let siswaArray = [];
    
//     for (let i = 0; i < jumlahSiswa; i++){
//         let nilaiSiswaArray = [];
//         let namaSiswa = prompt("Masukkan nama Siswa");
//         let kelasSiswa = prompt("Masukkan kelas siswa");
//         for (let i = 0; i < 3; i++){
//             let nilaiSemester1Siswa = parseInt(prompt("Masukkan nilai siswa pada semester 1"));
//             nilaiSiswaArray.push(nilaiSemester1Siswa);
//         }
        
//         // Create a Siswa object and push it to the array
//         let siswa = { 
//             nama: namaSiswa, 
//             kelas: kelasSiswa, 
//             nilaiSemester1: nilaiSiswaArray 
//         };
//         siswaArray.push(siswa);
//     }

//     // Do something with the siswaArray, like displaying it or further processing
//     console.log(siswaArray);
// };

// let siswa1 = Siswa("mahatma", "XII TKJ 5", [92,92,99])
// let siswa2 = Siswa("mute", "XII TKJ 5", [96,95,99])


// 3. constructor function
// paling sering di gunakan, dan sangat similar dengan function declaration

// let Siswa = function(nama, kelas, nilaiSemester1){
//     this.nama = nama
//     this.kelas = kelas
//     this.nilaiSemester1 = nilaiSemester1
//     this.avgNilai = function(){
//         let totalNilai = 0;
//         for (let i = 0; i < this.nilaiSemester1.length; i++){
//             totalNilai += this.nilaiSemester1[i]
//         }
//         return totalNilai / this.nilaiSemester1.length
//     }
// }

// let siswaArray = [];
// let tambahSiswa = function(){
//     let k = 'siswa';
//     let jumlahSiswa = parseInt(prompt("Masukkan jumlah siswa yang akan di input :"));
    
//     for (let i = 0; i < jumlahSiswa; i++){
//         let nilaiSiswaArray = [];
//         let namaSiswa = prompt("Masukkan nama Siswa");
//         let kelasSiswa = prompt("Masukkan kelas siswa");
//         for (let i = 0; i < 3; i++){
//             let nilaiSemester1Siswa = parseInt(prompt("Masukkan nilai siswa pada semester 1"));
//             nilaiSiswaArray.push(nilaiSemester1Siswa);
//         }
        
//         // Create a new Siswa object and push it to the array
//         let siswa = new Siswa(namaSiswa, kelasSiswa, nilaiSiswaArray);
//         siswaArray.push(siswa);
//     }

//     // Do something with the siswaArray, like displaying it or further processing
//     console.log(siswaArray);
// };

// 4. object.create
const methodSiswa = {
    avgNilai : function(){
        let totalNilai = 0;
        for (let i = 0; i < this.nilaiSemester1.length; i++){
            totalNilai += this.nilaiSemester1[i]
        }
        return totalNilai / this.nilaiSemester1.length
    }
} 

let Siswa = function(nama, kelas, nilaiSemester1){
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama
    siswa.kelas = kelas
    siswa.nilaiSemester1 = nilaiSemester1
    return siswa;
}

let siswaArray = [];
let tambahSiswa = function(){
    let jumlahSiswa = parseInt(prompt("Masukkan jumlah siswa yang akan di input :"));
    
    for (let i = 0; i < jumlahSiswa; i++){
        let nilaiSiswaArray = [];
        let namaSiswa = prompt("Masukkan nama Siswa");
        let kelasSiswa = prompt("Masukkan kelas siswa");
        for (let i = 0; i < 3; i++){
            let nilaiSemester1Siswa = parseInt(prompt("Masukkan nilai siswa pada semester 1"));
            nilaiSiswaArray.push(nilaiSemester1Siswa);
        }
        
        // Create a new Siswa object and push it to the array
        let siswa = new Siswa(namaSiswa, kelasSiswa, nilaiSiswaArray);
        siswaArray.push(siswa);
    }

    // Do something with the siswaArray, like displaying it or further processing
    console.log(siswaArray);
};