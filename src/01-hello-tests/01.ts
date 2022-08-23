export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export const splitIntoWords =(sentense: string) =>{
const words = sentense.toLowerCase().split(' ')
    return words.map(w=>w.replace("!",""))
}