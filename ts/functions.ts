let x = 3;
let add = function (n1: number, n2: number): number {
    return n1 + n2;
};

console.log(add(3, 1));

let average = function (n1, n2, adderFn) {
    return adderFn(n1, n2) / 2;
};

let avg = average(3, 6, function (n1, n2) {
    return n1 + n2;
});

console.log(avg);

let square = n => n * n;
let sum = (n1, n2) => n1 + n2;

let students = [
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

let femaleStudents = students
    .filter(s => s)
    .filter(s => s.gender == 'F')
    .map(s => s.name);
console.log(femaleStudents);


let numbers = [2,3,9,11];

let result = numbers.reduce((res, r) => res + r, 0);
console.log(result);

let studentsWoNull = students.reduce((res,r) => r ? res.concat(r) : res, []);
console.log(studentsWoNull);

let attributes = [ 
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

let output = attributes
    .reduce( function(res, r) {
        let key = r.name;
        let value = r.value;

        if(res[key]) {
            res[key].push(value);
        } else {
            res[key] = [value];
        };
        return res;
    }, {})

    console.log(output);





