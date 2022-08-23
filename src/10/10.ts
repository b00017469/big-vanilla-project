export type UserType2 = {
    name: string
    hair: number
    address: { city: string }
}

export type UserTypeWishLaptop = UserType2 & {
    laptop: { title: string }
}
export type UserTypeWishBooks = UserTypeWishLaptop & {
    books: string[]
}
export type TypeWishCompany = {
    companies: Array<{ id: number, title: string }>
}

export function hairdresser(u: UserType2, power: number) {
    const copy = {...u, hair: u.hair / 2}
    return copy
}
export type CompaniesType = {
    [key: string]: Array<{ id:number, title:string }>
}

export function moveUser(u: UserTypeWishLaptop, city: string) {
    return {...u, address: {...u.address, city: city}}
}

export function changeUserLaptop(u: UserTypeWishLaptop, laptopTitle: string) {
    return {...u, laptop: {...u.laptop, title: laptopTitle}}
}

export function addNewBooks(u: UserTypeWishBooks, newBooks: string[]) {
    return {...u, books: [...u.books.concat(newBooks)]}
}

export function updateBook(u: UserTypeWishBooks, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(book => book === oldBook ? newBook : book)}
}

export const removeBook = (u: UserTypeWishBooks, book: string) => ({...u, books: u.books.filter(b => b !== book)})

export const updateCompanyTitle = (u: TypeWishCompany, idCompany: number, companyTitle: string) => {
    return {...u, companies: u.companies.map(c => c.id === idCompany ? {...c, title: companyTitle} : c)}
}

export const updateCompanyTitle2 = (companies: CompaniesType, userName:string, companyId: number, newTitle: string)=>{
    return {...companies, [userName]: companies[userName].map(e=>e.id ===companyId?{...e, title: newTitle}:e)}
}