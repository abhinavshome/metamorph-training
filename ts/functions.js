var x = 3;
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(3, 1));
var average = function (n1, n2, adderFn) {
    return adderFn(n1, n2) / 2;
};
var avg = average(3, 6, function (n1, n2) {
    return n1 + n2;
});
console.log(avg);
var square = function (n) { return n * n; };
var sum = function (n1, n2) { return n1 + n2; };
var students = [
    {
        name: 'Anna',
        gender: 'M',
        age: 21
    },
    {
        name: 'Neha',
        gender: 'F',
        age: 23
    },
    null,
    {
        name: 'Sayali',
        gender: 'F',
        age: 20
    },
    {
        name: 'Bhavna',
        gender: 'F',
        age: 21
    },
    null
];
var femaleStudents = students
    .filter(function (s) { return s; })
    .filter(function (s) { return s.gender == 'F'; })
    .map(function (s) { return s.name; });
console.log(femaleStudents);
var numbers = [2, 3, 9, 11];
var result = numbers.reduce(function (res, r) { return res + r; }, 0);
console.log(result);
var studentsWoNull = students.reduce(function (res, r) { return r ? res.concat(r) : res; }, []);
console.log(studentsWoNull);
var attributes = [
    {
        name: 'fruit',
        value: 'mango'
    },
    {
        name: 'person',
        value: 'anna'
    },
    {
        name: 'person',
        value: 'neha'
    },
    {
        name: 'person',
        value: 'meera'
    }
];
// {
//     fruit: ['mango'],
//     person: ['anna', 'neha', 'meera']
// }
var output = attributes
    .reduce(function (res, r) {
    var key = r.name;
    var value = r.value;
    if (res[key]) {
        res[key].push(value);
    }
    else {
        res[key] = [value];
    }
    ;
    return res;
}, {});
console.log(output);
