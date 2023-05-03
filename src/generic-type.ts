//const rollNumbers: Array<number> = [1, 3, 5, 4]

type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [1, 3, 5, 4];
const rollNumbers1: GenericArray<string> = ['1', '3', '5', '4'];

type NameRollType = { name: string; roll: number }
const NameRoll: GenericArray<NameRollType> = [
    {
        name: "Nirpb",
        roll: 1
    },
    {
        name: "Alip",
        roll: 2
    },
]


type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['male', 'female'];

interface RelationWithSalary { name: string; salary: number }
const relationWithSalary: GenericTuple<RelationWithSalary, string> = [
    {
        name: 'male',
        salary: 10000
    },
    'female'
]