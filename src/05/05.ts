export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Aleksandr Petrov', age: 22},
    {name: 'Vasily Popkin', age: 19}
]

const dimychTransformator = (man:ManType) => {
return{
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}
}


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        tack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Aleksandr', lastName: 'Petrov'
    },
    {
        tack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Vasily', lastName: 'Popkin'
    }
]

const dev2 = people.map(dimychTransformator)
const dev3 = people.map(man =>( {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}! Welcome to IT-incubator`)
export const createGreetingMessage = (people: ManType[])=>{
    return people.map(man => `Hello ${man.name.split(' ')[0]}! Welcome to IT-incubator`)
}