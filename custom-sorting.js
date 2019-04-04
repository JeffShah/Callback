var students = [
  { id: 1, name: "bruce",    age: 40 }, //whole information in {...} are called Object
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 45 },
  { id: 4, name: "alex",     age: 35}
];

// Using sort function inside the Javascript which is pre-defined by the JS language.
students.sort(function(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return 0;
});

console.log(students);

// How we know what is a, and b?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Explaining the function called, student.sort:
/* a: here means that the script will run back into var student which is an array [],
 and will read the first set of the information. 
 By using dot notation "." with a.name, it will connect/join the next set of information.

 I used if-statement here, which one has to, is because we have different conditins.

*/