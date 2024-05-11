let employees = ['Fernando','Melissa','Eduardo'];
let salaries:number[] =[1500,2400,3200];
let flowers: string[] = ['Rosa','Girasol','Lirio','Rosa azul'];

console.log(employees)

for (let i:number=0;i<=flowers.length - 1;i++){
    console.log(flowers[i])
}

for (let i:number=0;i<employees.length;i++){
    console.log('el salario de '+ employees[i] + ' es de: $'+ salaries[i]);
}
