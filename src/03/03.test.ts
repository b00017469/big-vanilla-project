import {addSkill} from "./03";
import {student} from "../02/02";
let studenty: StudentType


test("Test addSkill for student", ()=>{
    let skill = "cooking"


    const result = addSkill(student, skill)
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("cooking")
})