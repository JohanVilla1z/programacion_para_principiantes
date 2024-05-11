interface Person {
    name:string,
    age:number,
    isActive:boolean
}

let johan:Person = {
    age:22,
    isActive: false,
    name:'Johan'
}
let juan:Person = {
    age: 42,
    isActive: true,
    name: 'Juan'
}
let melissa:Person = {
    age: 30,
    isActive: false,
    name: 'Melissa'
}
let fernando:Person = {
    age: 36,
    isActive: true,
    name: 'Fernando'
}

let people:Person[] = [johan,fernando,melissa,juan];

for(let i=0;i<people.length;i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age)
}