const users = [
    { name: "Tom", age: 20 },
    { name: "Jane", age: 25},
    { name: "Mike", age: 30},
];

let old = users[0];

for (let i =1; i < users.length; i++) {
    if(users[i].age > old.age) {
        old = users[i];
    }
}

console.log(old.name)