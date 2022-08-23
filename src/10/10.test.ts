import {
    addNewBooks,
    changeUserLaptop, CompaniesType,
    hairdresser,
    moveUser, removeBook, TypeWishCompany, updateBook, updateCompanyTitle, updateCompanyTitle2,
    UserType2,
    UserTypeWishBooks,
    UserTypeWishLaptop
} from "./10";

test('reference type test', () => {

    let user: UserType2 = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        }
    }
    const cutedUser = hairdresser(user, 2)

    expect(cutedUser.hair).toBe(17.5)
    expect(user.hair).toBe(35)
})
test('address test', () => {

    let user: UserTypeWishLaptop = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})
test('upgrade user laptop to macbook', () => {

    let user: UserTypeWishLaptop = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        }
    }
    const upgradedUser = changeUserLaptop(user, 'MacBook')


    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('MacBook')
})
test('upgrade user books', () => {

    let user: UserTypeWishBooks = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        },
        books: ['js', 'css', 'Azbooka']
    }
    const upgradedUser = addNewBooks(user, ['ts', 'react'])

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[3]).toBe('ts')
    expect(upgradedUser.books[4]).toBe('react')
})

test('update js to ts', () => {

    let user: UserTypeWishBooks = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        },
        books: ['js', 'css', 'Azbooka']
    }
    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe('ts')
})
test('remove js book', () => {

    let user: UserTypeWishBooks = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        },
        books: ['js', 'css', 'Azbooka']
    }
    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe('css')
})

test('update title company', () => {

    let user: UserTypeWishBooks & TypeWishCompany = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        },
        books: ['js', 'css', 'Azbooka'],
        companies: [{id: 1, title: 'eps'}, {id: 2, title: 'IT-Incubator'}]
    }
    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserTypeWishBooks & TypeWishCompany

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update title company assocarray', () => {

    let user: UserTypeWishBooks = {
        name: 'Pasha',
        hair: 35,
        address: {
            city: 'Brest city'
        },
        laptop: {
            title: 'probook'
        },
        books: ['js', 'css', 'Azbooka']
    }

    let companies: CompaniesType = {
        'Dimych': [{id: 1, title: 'eps'}, {id: 2, title: 'IT-Incubator'}],
        'Artem': [{id: 2, title: 'IT-Incubator'}]
    }
    let copy = updateCompanyTitle2(companies, "Dimych", 2, "sssssssssssss")

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][1].title).toBe("sssssssssssss")
})