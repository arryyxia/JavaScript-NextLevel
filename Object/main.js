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
let Siswa = function(nama, kelas, nilaiSemester1){
    let siswa = {}
    siswa.nama = nama
    siswa.kelas = kelas
    siswa.nilaiSemester1 = nilaiSemester1
    siswa.avgNilai = function(nilaiSemester1){
        let totalNilai = 0;
        for (let i = 0; i < this.nilaiSemester1.length; i++){
            totalNilai += this.nilaiSemester1[i]
        }
        return totalNilai / this.nilaiSemester1.length
    }
    return siswa
}
let siswa1 = Siswa("mahatma", "XII TKJ 5", [92,92,99])
let siswa2 = Siswa("mute", "XII TKJ 5", [96,95,99])


// 3. constructor function
// 4. object.create