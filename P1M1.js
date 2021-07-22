var set1 = [3, 1, 7, 9]
var set2 = [2, 4, 1, 9, 3]
var sum = 0


for (let i=0; i < set1.length; i++) {
    for (let j=0 ; j < set2.length; j++) {
        if ( set1[i] === set2[j] ) {
            set1[i] =0 
            set2[j] =0 
        }
    }
}



for (let i=0; i < set1.length; i++) {
    
    sum = sum + set1[i]
}

for (let j=0; j < set2.length; j++) {
    sum = sum + set2[j]
}
console.log('set1', set1)
console.log('set2', set2)
console.log(sum)
