
let person = {
    name: 'Melissa',
    age: 22,
    isActive: true,
    hobbies: ['soccer','baseball'],
    toString(){
        let objectString = this.name+ ' ' +this.age+ ' ' +this.hobbies;
        console.log(objectString)
    }
}

// person.toString()

let car = {
    model:'Moustang GT',
    brand:'Ford',
    doors:2,
    releaseYear:1998
}

let smartTv = {
    screenSizeInches:55,
    brand: 'Sony',
    model: 'Bravia 55',
    type: 'oLED'

}

let youtubeVideo = {
    tittle:'Introduccón a POO',
    author:'Fernando',
    lengthInSecs:36690,
    numberOfLikes:6687
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
