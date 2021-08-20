//selectionner juste un elem
// var username_input = document.getElementById("username-input")
//queryselector 
// var username_input = document.querySelector("input#username-input");
// //colorer linput en red pour les bordures 
// username_input.style.border = "solid red"

// console.log(username_input);



//cibler plusieurs elems 
var list_etudiants = document.querySelectorAll("ul li")

//parcourir la liste des etudiant (li)
for (let i = 0; i < list_etudiants.length; i++) {
    var etudiant = list_etudiants[i];
    if (etudiant.textContent == "ayman") {
        etudiant.style.color = 'red'
        // etudiant.textContent == "ayman ABSCENT"
        // etudiant.textContent == etudiant.textContent + " absent"
        etudiant.textContent+=" ABSCENT"
    }else {
        etudiant.style.color = 'green'
        // if(i==0)
        // etudiant.textContent="Isaac"
        // else 
        // etudiant.textContent="Meri"

        etudiant.textContent = i==0? 'Issac':'Meri'
    }
    console.log(etudiant.textContent);
}

console.log(list_etudiants)



//-EVENMENT

function ajouterEtudiant(){

    //valider l'input
    ///cibler linput

    var etudiant_input = document.querySelector("input");
    ///valider linput
    if(etudiant_input.value==""){
        alert("Error champ vide ")
        
    }else{
        //recuperer la valeur
        var etudiant_val = etudiant_input.value
        //creer li avec la valeur recuperer
        var li = "<li>"+etudiant_val+"</li>"
        //ajouter li a ul 
        // document.querySelector("ul").innerHTML+=li;
        var ul_etudiants = document.querySelector("ul");
        ul_etudiants.innerHTML=li + ul_etudiants.innerHTML ;
        //vide linput
        etudiant_input.value=""
    }
    //
    // alert(1)
    console.log(etudiant_input.value);
}