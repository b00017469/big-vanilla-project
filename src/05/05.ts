const ages = [18, 20, 30, 34, 1, 100, 14]

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]  // >90


type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 160}
]

//<160
const cheapPredicate = (course: CourseType) => {
    return course.price < 170
}


const cheaperCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 160}
]


