const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'data is fetch';
        if (data) {
            resolve(data);
        } else {
            reject('failed to fetch');
        }
    })
}
const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}

//object
interface DataType {
    data: string;
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Data is fetched" };
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!");
        }
    });
};

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
};


//fetch data
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const url: string = "https://jsonplaceholder.typicode.com/todos/1"

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch(url);
    return await response.json();
}
const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodoData();
