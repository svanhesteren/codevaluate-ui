
const testEvals = [
  {
    "code":"Red",
    "student":"pietje",
    "weight":47
  },
  {
    "code":"Green",
    "student":"jantje",
    "weight":21
  },
  {
    "code":"Green",
    "student":"klaasje",
    "weight":21
  },
  {
    "code":"Yellow",
    "student":"bart",
    "weight":32
  },
  {
    "code":"Yellow",
    "student":"henk",
    "weight":32
  },
  {
    "code":"Red",
    "student":"kees",
    "weight":47
  },

]
const smallTestEvals = [
  {
    "code":"Red",
    "student":"pietje",
    "weight":47
  },
  {
    "code":"Green",
    "student":"jantje",
    "weight":21
  }]

const smallTestEvalsNames = ["pietje", "jantje"]


const sumAllWeights = (evaluations) => {

  var allWeights = 0

  evaluations.forEach((evaluation) => {

    allWeights += convertWeight(evaluation.code)

  })
  return allWeights
}


console.log("all weights together should be 200: ", sumAllWeights(testEvals) === 200)

const randomWeightValue = (allWeights) => {

  return Math.floor(Math.random() * allWeights) +1
}

const randomTestNum = randomWeightValue(sumAllWeights(testEvals))
// console.log(randomTestNum);
console.log("random number should be between 1 and 200 ", randomTestNum <= 200 && randomTestNum >= 1 )


const convertWeight = (evaluation) => {
    switch(evaluation.code){
      case "Green":
        return 21
      case "Yellow":
        return 32
      default:
        return 47
  }
}

const randomStudent = (evaluations) => {

  var totalWeight = randomWeightValue(sumAllWeights(evaluations))

  for (var evaluation of evaluations) {

    const evalWeight = convertWeight(evaluation.code)
    if (totalWeight <= evalWeight) {
      return evaluation
    }
    totalWeight -= evalWeight
  }

  }



const studentName = randomStudent(smallTestEvals)
// console.log(studentName);
console.log("chosen name is in list of student names ", smallTestEvalsNames.includes(studentName.student)  )






// console.log();smallTestEvals
// console.log(testEvals);
// console.log(randomStudent(testEvals));
