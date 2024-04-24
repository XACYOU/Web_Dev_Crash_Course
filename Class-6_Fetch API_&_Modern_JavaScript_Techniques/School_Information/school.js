const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
};

let countCalculation = ({departments: {math:{teachers:mathTeachersCount, students:mathStudentsCounts}, history:{teachers:historyTeachersCount, students:historyStudentsCount}}}) => {
    let obj={};

    obj.mathTeachersCount = mathTeachersCount;
    obj.mathStudentsCounts = mathStudentsCounts;
    obj.historyTeachersCount = historyTeachersCount;
    obj.historyStudentsCount = historyStudentsCount;

    return obj;
};

console.log(countCalculation(school))

let findTopStudent = (school, courseName) => {

    let topStudent = {};
    let {students} = school;
    let maxScore = -Infinity;

    students.forEach((ele) => {
        let courseScore=ele.scores[courseName];
        if(courseScore > maxScore){
            maxScore = courseScore;
            topStudent = ele;
        }
    });

    return topStudent;
};

console.log(findTopStudent(school, "history"));

let addNewDept = (school, newDepartment) => {

    let obj = {...school,departments:{...school.departments,...newDepartment}};

    return obj;
}

console.log(addNewDept(school, {art:{teachers:2, students:50}}));

let highestStudentCountDepartment = ({departments}) => {

    let name = "";
    let maxCount = 0;

    for(let key in departments) {
        if(departments[key].students > maxCount){
            maxCount = departments[key].students;
            name = key;
        }
    }
    return `${name} ${maxCount}`
};

console.log(highestStudentCountDepartment(school))

let generateGreeting = (name, language) =>{

    let greetings ={
        English: "Hello",
        Spanish: "¡Hola",
        French: "Bonjour"
    }

    switch (language){
        case "English":
            return `${greetings[language]} ${name}`;
        case "Spanish":
            return `${greetings[language]} ${name}`;
        case "French":
            return `${greetings[language]} ${name}`;
        default:
            return `${greetings["English"]} ${name}`;
    }

}

console.log(generateGreeting("Alice", "Spanish"));
