function increaceAge(u:UserType) {
    u.age++
}

test('Big test', ()=>{

    let user:UserType ={
        name: 'Pasha',
        age: 35
    }
    increaceAge(user)

    expect(user.age).toBe(36)

})