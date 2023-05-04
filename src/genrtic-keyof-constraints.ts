type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = "name" | "age" | "address"; // manully korsi

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = 'age'
const b: newTypeUsingKeyOf = 'name'


// const a ={
//     name:"Nirob",
//     age:10
// }
// a['name']

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const property = getProperty({ name: 'mr.x', age: 1 }, 'age')