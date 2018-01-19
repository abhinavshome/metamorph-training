let employees = [
    'Anna|21|Pune|M',
    'Neha|23|Pune|F',
    'Ninad|27|Solapur|M',
    'Abhinav|32|Bihar|M',
    'Kewal|35|Mumbai|M'
].map(e => {
    let employeeData = e.split('|');
    return {
        name: employeeData[0],
        age: +employeeData[1],
        city: employeeData[2],
        gender: employeeData[3]
    }
});

console.log(employees);

let males = employees
    .filter(e => e.gender == 'M')
    .map(e => e.name);

let notFromPune = employees
    .filter(e => e.city != 'Pune')
    .map(e => e.name);

// let minMax = employees
//     .reduce((res, r) => {
//         let resMin = res[0];
//         let resMax = res[1];

//         let newResMin = resMin < r.age ? resMin : r.age;
//         let newResMax = resMax > r.age ? resMax : r.age;

//         return [newResMin, newResMax];
//     }
//     , [employees[0].age, 0])
//     .join('-')
//     ;

let min = employees
    .map(e => e.age)
    .reduce( (res, r) => r < res ? r : res , Infinity);

let max = employees
    .map(e => e.age)
    .reduce( (res, r) => r > res ? r : res, 0)    

console.log(min + '-' + max);

let average = employees
    .map(e => e.age)
    .reduce( (res, r) => r + res , 0)/employees.length;

console.log(average);

let firstGroup = employees.filter(e => e.age >= 21 && e.age <= 25); 
let secondGroup = employees.filter(e => e.age > 25 && e.age <= 30); 
let thirdGroup = employees.filter(e => e.age > 30); 
let employeeDist = {
    '21-25': firstGroup,
    '25-30': secondGroup,
    '30+': thirdGroup,
};

let edist = employees
    .reduce( (res, r) => {
        if(r.age >=21 && r.age < 25) 
            res['21-25'].push(r.name)
        else if(r.age >=25 && r.age < 30)
            res['25-30'].push(r.name)
        else if(r.age >= 30)
            res['30+'].push(r.name)
        return res;
    }
    , {
    '21-25': [],
    '25-30': [],
    '30+': [],
    });

    console.log(edist);

let sum = 0;
[2,3,4,6].forEach(e => sum = sum + e);

[2,3,4,6].reduce( (res, e) => res + e, 0);





