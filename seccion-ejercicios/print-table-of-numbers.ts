export function printTable(filas:number,columnas:number=1){
    let count:number= 0;
    for (let i = 0; i < filas;i++){
        let line:string='';
        for (let j=0;j<columnas;j++){
            count++;
            line = line+count+' ';
        }
        console.log(line);
    }
}