export function higherFromList(list:number[]) {
    let higher:number=0;
    for (let i = 0; i < list.length; i++) {
        if (list[i]>higher){
            higher=list[i];
        }
    }
    return higher;
}
