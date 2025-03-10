
let students = [
    {name : "Jhon",
     grades : {math : 55 , science : 60 , english : 65}
    },
    {
     name : "Jane",
     grades : {math : 45 , science : 40 , english : 55}
    },
    {
     name : "Mary",
     grades : {math : 75 , science : 80 , english : 85}
    }
];

const result = lowestSubject(students);
console.log(result);

// function findTopStudent(students){
//     return students
//     .filter(student => Object.values(student.grades).every(grade => grade >= 50))
//     .map(student =>{
//         const grades = Object.values(student.grades);
//         const averageGrade =grades.reduce((sum,grade) => sum + grade,0) / grades.length;
//         return {name : student.name , averageGrade};
//     })
//     .reduce((topStudent,current) => (current.averageGrade > (topStudent?.averageGrade || 0) ? current : topStudent),null)
// }

//---------------------------------------------------------------------------------------------

// function studentsPassingAll(students){
//     return students
//     .filter(student => Object.values(student.grades).every(grade => grade >= 60))
//     .map(student => student.name);
// }

//-----------------------------------------------------------------------------------------------

// function sortStudentByAverage(students){
//     return students
//     .map(student =>{
//         const grades = Object.values(student.grades);
//         const averageGrade = grades.reduce((sum,grade) => sum + grade , 0) / grades.length;
//         return {name : student.name , averageGrade};
//     })
//     .sort((a,b) => b.averageGrade - a.averageGrade);
// }

//--------------------------------------------------------------------------------------------------

function lowestSubject(students){
    return students
    .map(student =>{
        const subject = Object.entries(student.grades);
        const lowest = subject.reduce((min, current) => (min[1] > current[1]) ? current : min )
        return {name : student.name , lowestSubject : lowest[0] , lowestScore : lowest[1]}
    })
}



