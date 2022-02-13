// High order array methods

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

// forEach method

// ES6 format
// todos.forEach((todo) => console.log(todo.text)); //list text arrays

todos.forEach(function(todo) {
    console.log(todo.text); //list text arrays
});

// map method, returns the same array, or changed array affecting all objects in the array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText); 

// filter method, returns a filtered array so need to assign to a variable
const todoCompleted = todos.filter(function(todo) {
    // returns a new array where the object variable isCompleted is true
    return todo.isCompleted === true;
}).map(function(todo) {
    // Chaining map would only return text string array in todo
    return todo.text;
})

console.log(todoCompleted);
