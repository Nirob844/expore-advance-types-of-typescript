//array
//type Numbers=number[];
//const numbers: Numbers = [1, 5, 7, 9];
interface INumbers {
    [index: number]: number;
}
const numbers: INumbers = [1, 5, 7, 9];

//object
interface IUser {
    name: string;
    age: number;
}
interface IExtendedUser extends IUser {
    role: string;
}

const user: IExtendedUser = {
    name: 'Nirob',
    age: 22,
    role: 'user'
}


// //function
// type AddNumbers=(n1: number, n2: number)=> number;
// const addNumbers: AddNumbers = (n1, n2) => n1 + n2;
interface IAddNumbers {
    (n1: number, n2: number): number;
}

const addNumbers: IAddNumbers = (n1, n2) => n1 + n2;