


export const randomStudent = (evaluations) =>{


  const redStudents = evaluations.filter(evaluation => evaluation.code === "Red")
  const yellowStudents = evaluations.filter(evaluation => evaluation.code === "Yellow")
  const greenStudents = evaluations.filter(evaluation => evaluation.code === "Green")

  const randomPercentage = Math.floor(Math.random() * 100) + 1

  var chosenStudent = ""

  if (randomPercentage <= 21) {
    // if(!)
    chosenStudent = greenStudents[Math.floor(Math.random() * greenStudents.length)]

  }
  else if (randomPercentage >= 32) {
    chosenStudent = redStudents[Math.floor(Math.random() * redStudents.length)]

  }
  else {

    chosenStudent = yellowStudents[Math.floor(Math.random() * yellowStudents.length)]
  }

const studentReturn = (!!chosenStudent && chosenStudent.studentId)
return studentReturn

}
