//demander le choix 
var choice = prompt("Calculatrice : \nAddition : + \nSoustraction : -\nDivision : /\nMultiplication : *\nQuitter : 0\nVotre Choix : ")

//la saisie des inputs a et b
if (choice != "0" && choice=="+" && choice=="-" && choice=="/" && choice=="/") {
    var a = parseFloat(prompt("Entrer la valeur de a : "))
    var b = parseFloat(prompt("Entrer la valeur de b ( Division b est non null ) : "))
}

//Traitement et resultat
switch (choice) {
    case "+": alert(a + " + " + b + " = " + (a + b))
        break;
    case "-": alert(a + " - " + b + " = " + (a - b))
        break;
    case "*": alert(a + " * " + b + " = " + (a * b))
        break;
    case "/": {
        //tester sur la valeur de b
        if (b == 0) alert("Error division sur 0 ")
        else alert(a + " / " + b + " = " + (a / b))

    } break;
    case "0": alert("Vous avez quitter le programme ")
        break;
    default: alert("Error de choix :p !!")
} // shift + alt + F 



//donner la possibilite de repeter le programme
if (choice != "0") {
    var choice_rep = prompt("Pour repeter taper ? \nOui : 1\nNon : 0 ");
    if (choice_rep == "1") {
        window.location.reload()
    }
}else {
    document.write("Vous aver quitter le programme ! ")
}
