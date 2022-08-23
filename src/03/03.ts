import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(sum(1, sum(3, 1)), 3)
console.log(res)

export const addSkill = (s: StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export function doesStudentLive(s: StudentType, city: string) {
    return s.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, number: number) => {
    building.staffCount -= number
}

export function toHireStaff(building: GovernmentBuildingType, stuffCountToHire: number) {
    building.staffCount+=stuffCountToHire
}