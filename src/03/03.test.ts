import {addSkill, doesStudentLive, makeStudentActive} from "./03";
import {StudentType} from "../02/02";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test("Test addSkill for student", () => {
    let skill = "cooking"


    addSkill(student, skill)
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("cooking")
    expect(student.technologies[3].title).toBeDefined()
})

test("Student shout be active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})

test("Does student live in city?", () => {
    let res1 = doesStudentLive(student, "Minsk")
    let res2 = doesStudentLive(student, "Moscow")

    expect(res1).toBe(true)
    expect(res2).toBe(false)
})