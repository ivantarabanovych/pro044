function addNumbers(a:number, b:number):number{
    return(a + b);
}

const sum = addNumbers(5, 10);
console.log(sum);

function identity<T>(arg: T): T{
    return arg;
}

const stringIdentity = identity <string>("Hello, Generics!");
console.log(stringIdentity);

const numberIdentity = identity <number>(21);
console.log(numberIdentity);





