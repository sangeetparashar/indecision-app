// Person

class Person {
    constructor(name = "Anon", age = 0){
        this.name = name;
        this.age = age;
    }
    getGetting() {
        return(`Hi. I am ${this.name}.`);
    }
    getDescription(){
        return(`${this.name} is ${this.age} year(s) old.`);
    }
}

//whenever you want to create a subclass, you simply name the name class and use the keyword extends

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    //overriding methods
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor)
            description += `They are studying ${this.major}.`;
        return description;
    }
    
}

class Traveller extends Person(){
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation)
            greeting += `I am visiting from ${this.homeLocation}.`
    }
}
const me = new Student("Sangeet", 23, 'Computer Science');
console.log(me);
console.log(me.getDescription());


