let emni: any;

emni = 'next level development';
(emni as string).length;
<string>emni.length;


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `result is ${value}`
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram('1000') as string;
