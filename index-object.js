var ETUDIANTS = [
    { nom: "nom1", pren: "pren1", isPresent: true, age: 0 },
    { nom: "nom1", pren: "pren1", isPresent: true, age: 0 },
    { nom: "nom1", pren: "ayman", isPresent: false, age: 0 }
]
//avant
console.log(ETUDIANTS);

//supprimer les etudiant absents
for (var i = 0; i < ETUDIANTS.length; i++) {
    
    if(!ETUDIANTS[i].isPresent)// if(ETUDIANTS[i].isPresent==false) 
    delete ETUDIANTS[i]
}
//apres
console.log(ETUDIANTS);