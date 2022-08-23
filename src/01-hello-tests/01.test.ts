import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test("Sum should be correct", () => {

    const result1 = sum(a, b);
    const result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("Mult should be correct", () => {

    const result1 = mult(a, b);
    const result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("split should be correct", () => {
    const sentense1 = "Hello world!"
    const sentense2 = "I like programming."

    const result1 = splitIntoWords(sentense1)
    const result2 = splitIntoWords(sentense2)

    expect(result1.length).toBe(2)
    expect(result2.length).toBe(3)

    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("world")

})