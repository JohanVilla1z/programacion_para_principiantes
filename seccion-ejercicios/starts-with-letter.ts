
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
export function heroesThatStartsWith(array:string[],letter:string){
    letter= letter.toUpperCase();
    let answer:string[]=[];
    for (let i = 0 ; i < array.length ; i++){
        if (array[i].startsWith(letter)){
            answer.push(array[i]);
        }
    }
    return answer;
}
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman