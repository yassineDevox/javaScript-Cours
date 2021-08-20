var numbers  = [1,3,0,5,0,6,0]

//changer une val
numbers[0]=0

//ajouter un elem a la fin  
numbers[4]=10
numbers[10]=10
numbers.push(11,20)

//ajouter au deb
numbers.unshift(1111)

console.table(numbers)

//supprimer elem au deb
numbers.shift()
//supprimer elem a la fin
numbers.pop()

//supprimer un element specifique 
delete numbers[3];

//supprimer des elems null 
for(var i=0;i<numbers.length;i++)
    if(numbers[i]==0) delete numbers[i]


//parcourir les val du tableau
for( var number in numbers) console.log(number)
//parcourir les indices du tableau
for (var i of numbers) {
    console.log(i)
}
console.log(number)
//afficher le tableau
console.table(numbers);
