interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U;
}

const crush1: CrushInterface<boolean> = {
    name: "kata keti",
    husband: true
}
const crush2: CrushInterface<string> = {
    name: "kata keti",
    husband: 'man'
}

//object
interface Husband {
    name: string;
    age: number;
}
interface Wife {
    name: string;
    age: number;
}
const crush3: CrushInterface<Husband, Wife> = {
    name: "kata keti",
    husband: {
        name: "abul",
        age: 54
    },
    wife: {
        name: 'lobi',
        age: 33
    }
}