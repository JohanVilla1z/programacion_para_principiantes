let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
export function largestNameOfArray(array:string[]){
    let larger:string='';
    for (let i =0;i<array.length;i++){
        if (array[i].length>larger.length){
            larger=array[i];
        }
    }
    return larger;
}
let hero = largestNameOfArray( heroes );
console.log( hero );