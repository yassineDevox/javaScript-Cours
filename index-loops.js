for(var i = 0;i<10;i++){
    console.log("Bonjour"+(i+1))
}






// remplir 1 etudiant
// var e1 = {
//     nom:prompt("Nom : "),
//     pren:prompt("Pren : "),
//     age:parseInt(prompt("Age : "))
// }
// console.log(e1)

//pour 4 etudiants
//demander le nombre d'étudiants 
do{
    var nbStudents = parseInt(prompt("Combien d'etudiant (doit etre diff de null) ? "));
}while(nbStudents<=0)

for(var i=1;i<=nbStudents;i++){
    var e1 = {
        nom:prompt("Nom "+i+" : "),
        pren:prompt("Pren "+i+" :"),
        age:parseInt(prompt("Age "+i+": "))
    }
    console.log(e1) 
} 

// Array
