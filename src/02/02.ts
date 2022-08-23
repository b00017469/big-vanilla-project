export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressStudentType
    technologies: Array<TechnologiesStudentType>
}
type AddressStudentType = {
    streetTitle: string
    city: CityAddressStudentType
}
type CityAddressStudentType = {
    title: string
    countryTitle: string
}
type TechnologiesStudentType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: "Pavel",
    age: 35,
    isActive: false,
    address: {
        streetTitle: "Tenistaya 25",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)