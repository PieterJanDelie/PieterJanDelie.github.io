let student = {}; // een leeg object
student.firstName = "John";
student.lastName = "Doe";
student.age = new Date (2000,1,1);
student.eyeColor = "blue";


// korter
// Create an object:
let student1 = {
    firstName: "John",
    lastName: "Doe",
    age: new Date (2000,1, 1, 8,10,30),
    eyeColor: "blue"
};

const setup = () => {

    console.log (student1.firstName);
    console.log (student1.age);
}
window.addEventListener("load", setup);