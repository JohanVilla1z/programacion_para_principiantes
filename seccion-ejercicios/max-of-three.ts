
export function max(a:number,b:number,c:number){
    let maxValue:number=0;
    if(a>b && a>c){
        return a;
    }
    if(b>c){
        return b;
    }
    return c;
}

console.log(max(300,92,13));