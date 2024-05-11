
export function printMatrix(filas:number,columnas:number){
    let count:number=0;
    for (let i = 0; i < filas;i++){
        let array:number[]=[];
        for (let j=0;j<columnas;j++){
            count=++count
            array.push(count);
        }
        console.log(array);
    }
}
printMatrix(5,5);