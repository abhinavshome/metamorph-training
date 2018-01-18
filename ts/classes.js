var Student = (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.introduce = function () {
        console.log('Hello! I am ' + this.name + ' and I am ' + this.age + ' years old');
    };
    return Student;
}());
var anna = new Student('Anna Cahavn', 25);
anna.name = 3;
anna.introduce();
