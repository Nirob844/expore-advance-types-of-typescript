//function
const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}

const result = createArray<string, Array<string>>('bangladesh', ['country']);

//spread operator

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = 'kateli';
    const newData = { ...myInfo, crush }
    return newData;
}
const myInfo = {
    name: 'crush',
    age: 2000
}
const result1 = addMeInMyCrushMind(myInfo);
