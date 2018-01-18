
for( let i = 1; i <= 4; i++) {
    document.getElementById('b' + i).onclick = 
      function() {console.log(i);}
}

const numberOfStudents = 22;

const student = Object.freeze({
    name: 'Anna',
    age: 25
});

// student.name = 'Nikhil'; // ERROR



