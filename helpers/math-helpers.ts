export function greet (name:string = 'Mundo'){
    console.log('Hola '+ name);
}
export function sumarDosNumeros(num1:number,num2:number):number{
    return (num1 + num2);
}

export function restarDosNumeros(num1:number,num2:number):number{
    return (num1 - num2);
}
 export function multiplicarDosNumeros(num1:number,num2:number):number{
    return (num1 * num2);
}

export function dividirDosNumeros(num1:number,num2:number):number{
    return (num1 / num2);
}

export function tablaMultiplicar(base: number, limite: number = 10) {
    if (limite <= 0){
        throw new Error ('El limite debe serrr mayor a cero')
    }
    for (let i: number = 1; i <= limite; i++) {
        console.log(base + ' x ' + i + ' = ' + base * i)
    }
}