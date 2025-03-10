let studentsTerm1 = [
    { name: "Jhon", grades: { math: 50, science: 55, english: 60 } },
    { name: "Jane", grades: { math: 40, science: 35, english: 50 } },
    { name: "Mary", grades: { math: 70, science: 75, english: 80 } }
];

let studentsTerm2 = [
    { name: "Jhon", grades: { math: 55, science: 60, english: 65 } },
    { name: "Jane", grades: { math: 45, science: 40, english: 55 } },
    { name: "Mary", grades: { math: 65, science: 80, english: 85 } }
];

const result = studentsWhoImproved(studentsTerm1,studentsTerm2);
console.log(result);

function studentsWhoImproved(term1 , term2){

    return studentsTerm1.reduce((improvedStudents, student1) =>{

        const student2 = term2.find(s => s.name === student1.name);

        if(student2){
            const hasImproved = Object.entries(student1.grades).every(([subject,grade])=>
             student2.grades[subject] > grade
        );

        if(hasImproved){
            improvedStudents.push(student1.name);
        }
        }

        return improvedStudents;
    },[])
}