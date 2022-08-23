import {createGreetingMessage, ManType} from './05'

let people: ManType[] = []

beforeEach(()=> {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Aleksandr Petrov', age: 22},
        {name: 'Vasily Popkin', age: 19}
    ]
})

test('should get array of greeting messages', ()=> {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrey! Welcome to IT-incubator")
    expect(messages[1]).toBe("Hello Aleksandr! Welcome to IT-incubator")
    expect(messages[2]).toBe("Hello Vasily! Welcome to IT-incubator")
})