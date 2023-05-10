function doSomething(x: string) {
    if (x === "world") {
        // do nothing
        console.log('Hello, ', x.toUpperCase());
    } else {
        console.log('npthing')
    }
}


interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log('Hello ' + person.name);

}
//greet({ name: 'nirob', age: 22 })