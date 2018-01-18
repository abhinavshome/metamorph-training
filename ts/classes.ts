class Student {

    constructor(public name, public age) {
    }

    introduce() : void {
        console.log('Hello! I am ' + this.name + ' and I am ' + this.age + ' years old');
    }
}

let anna = new Student('Anna Cahavn', 25);
anna.name = 3;
anna.introduce();