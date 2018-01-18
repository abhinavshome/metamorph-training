var _loop_1 = function (i) {
    document.getElementById('b' + i).onclick =
        function () { console.log(i); };
};
for (var i = 1; i <= 4; i++) {
    _loop_1(i);
}
var numberOfStudents = 22;
var student = {
    name: 'Anna',
    age: 25
};
Object.freeze(student);
student.name = 'Nikhil';
