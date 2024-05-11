
export class Car{
    readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    readonly type: string;
    readonly createdAt:number;
    constructor(brand:string,type:string){
        this.brand = brand;
        this.createdAt = 123456;
        this.doors =0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
    }
    turnOn(){
        if (this.isRunning){
            console.log('El carro ya estaba encendido, se averió el motor');
            return;
        }
        if (this.fuelTank <=0){
            console.log('el carro no tiene combustible');
            return;
        }
        
            this.isRunning = true;
            console.log('El carro esta encendido!');
    }
    fillTank(gas:number){
        let totalGas:number= gas+this.fuelTank;
        if (gas<= 0){
            throw new Error('El valor del combustible debe ser positivo!!');
            return;
        }
        if (totalGas>= 100){
            console.log('el tanque de combustible ya está lleno!!');
            this.fuelTank=100;
            return;
        }else{
            console.log('Has cargado el tanque exitosamente hasta '+ totalGas);
            this.fuelTank = totalGas
        }
        
    }
}
let myMazda = new Car('Mazda','Sedan');

console.log(myMazda);
myMazda.turnOn();
console.log(myMazda);
myMazda.fillTank(108);
console.log(myMazda);
myMazda.turnOn();