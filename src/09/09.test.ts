function increaceAge(u: UserType) {
    u.age++
}

type UserPlusType = {
    name: string
    age: number
    address: { city: string }
}

test('Big reference type test', () => {

    let user: UserType = {
        name: 'Pasha',
        age: 35
    }
    increaceAge(user)

    expect(user.age).toBe(36)

    const supermen = user;
    supermen.age = 1000

    expect(user.age).toBe(1000)

})
test('Big array test', () => {

    let users = [
        {
            name: 'Pasha',
            age: 35
        },
        {
            name: 'Masha',
            age: 34
        }
    ]
    const admins = users;
    admins.push({name: 'Banduygan', age: 10})

    expect(users[2].age).toBe(10)
    expect(users[2]).toEqual({name: 'Banduygan', age: 10})
})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++;

    expect(usersCount).toBe(100)
})

test('reference type test', () => {
    const address = {
        city: 'Brest city'
    }
    let user: UserPlusType = {
        name: 'Pasha',
        age: 35,
        address: address
    }
    let user2: UserPlusType = {
        name: 'Masha',
        age: 35,
        address: address
    }
    address.city = 'Bali'

    expect(user.address.city).toBe('Bali')
    expect(user.address).toBe(user2.address)

})

test('reference type array test', () => {
    const address = {
        city: 'Brest city'
    }
    let user: UserPlusType = {
        name: 'Pasha',
        age: 35,
        address: address
    }
    let user2: UserPlusType = {
        name: 'Masha',
        age: 35,
        address: address
    }
    const users = [user, user2, {name: 'Tsyhon', age: 2, address: address}]
    const admins = [user, user2]
    admins[0].name= 'Pavel'

    expect(user.name).toBe('Pavel')
    expect(users[0].name).toBe('Pavel')

})