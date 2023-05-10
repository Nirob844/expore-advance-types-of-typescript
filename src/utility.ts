// pick
interface Person {
    name: string;
    age: number
    email?: string;
}
type Details = Pick<Person, 'age' | 'email'>

//omit
type Name = Omit<Person, 'age' | 'email'>

// partial and required
type Optional = Partial<Person>
type RequiredProps = Required<Person>

//readonly
const person: Readonly<Person> = {
    name: 'kabul',
    email: 'ka@bul.com',
    age: 34
}
//person.age=14    [error]

//record
type Obj = Record<'a' | 'b' | 'c', string>
const obj: Obj = {
    a: '1',
    b: '2',
    c: '3'
}