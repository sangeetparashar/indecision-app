// Person

class Person {
    constructor(name = "Anon"){
        this.name = name;
        console.log(`Hi my name is ${name}`);
    }
}

const me = new Person("Sangeet");
