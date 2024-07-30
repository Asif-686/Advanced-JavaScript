const students = [
  {
    name: 'John',
    age: 20,
    score: 90,
  },
  {
    name: 'Jane',
    age: 21,
    score: 80,
  },
  {
    name: 'Mike',
    age: 22,
    score: 70,
  },
  {
    name: 'Peter',
    age: 23,
    score: 60,
  },
  {
    name: 'Mary',
    age: 24,
    score: 50,
  },
];
let output = [];
for (let i = 0; i < students.length; i++) {
    output.push(students[i].name) ;
}
const studentsNames = students.map(x => x.name) ;
const goodStudents = students.filter(x => x.score >60);
console.log(goodStudents.map(x => x.name));
