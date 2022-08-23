test("Shoud take old men older then 90", ()=>{
    const ages = [18, 20, 30, 34, 1, 100, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("Shoud take cheap courses (<170)", ()=>{
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 160}
    ]

    const cheaperCourses = courses.filter(course => course.price < 170)

    expect(cheaperCourses.length).toBe(2);
    expect(cheaperCourses[0].price).toBe(110);
    expect(cheaperCourses[1].price).toBe(160);
})

test("get only complited tasks", ()=>{
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: true},
        {id: 4, title: "Sugar", isDone: false},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(3);
})