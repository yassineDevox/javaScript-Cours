//demander le choix 
var choice = prompt("Calculatrice : \nAddition : + \nSoustraction : -\nDivision : /\nMultiplication : *\nQuitter : 0 \nVotre Choix : ")

//la saisie des inputs a et b
var a = parseFloat(prompt("Entrer la valeur de a : "))
var b = parseFloat(prompt("Entrer la valeur de b ( Division b est non null ) : "))

//Traitement et resultat
if(choice=="+") alert(a +" + " +b+ " = "+ (a+b))
else if (choix == "-") alert(a +" - " +b+ " = "+ (a-b))
else if (choix == "*") alert(a +" * " +b+ " = "+ (a*b))
else {
    //tester sur la valeur de b
    if(b==0) alert("Error division sur 0 ")
    else alert(a +" / " +b+ " = "+ (a/b))
}
