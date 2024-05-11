export function oddAndEvenFromList(list:number[]) {

    for (let i = 0; i < list.length; i++) {
        if (list[i]%2===0){
            console.log(list[i]+ ' es par')
        }else{
            console.log(list[i]+' es impar')
        }
    }
}