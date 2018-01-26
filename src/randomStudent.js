
const convertWeight = (code) => {
  switch(code){
    case "Green":
      return 21
    case "Yellow":
      return 32
    case "Red":
      return 47
    default:
      return 0
  }
}


const sumAllWeights = (evaluations) => {

  var allWeights = 0

  evaluations.forEach((evaluation) => {
    allWeights += convertWeight(evaluation.code)
  })
  return allWeights
}



const randomWeightValue = (allWeights) => {

  return Math.floor(Math.random() * allWeights) + 1
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
    },
    {
      "code":"Yellow",
      "student":"marietje",
      "weight":32
    }
  ]

    const smallTestEvalsNames = ["pietje", "jantje", "marietje"]


const runTests = () => {




  const allTestWeights = sumAllWeights(testEvals)
  console.log(allTestWeights);
  console.log("all weights together should be 200: ", allTestWeights === 200)

  const randomTestNum = randomWeightValue(sumAllWeights(testEvals))
  // console.log(randomTestNum);
  console.log("random number should be between 1 and 200 ", randomTestNum <= 200 && randomTestNum >= 1 )


  const studentName = randomStudent(smallTestEvals)
  // console.log(studentName);
  console.log("chosen name is in list of student names ", smallTestEvalsNames.includes(studentName.student)  )

  var marietje = 0
  var jantje = 0
  var pietje = 0

  for(var i=0;i<=1000;i++) {
    var name = randomStudent(smallTestEvals).student
    if (name === "marietje") {marietje++}
    if (name === "jantje") {jantje++}
    if (name === "pietje") {pietje++}
  }
  console.log();
  console.log(`Pietje (red) got chosen: ${(pietje/10)}% times`);
  console.log(`Marietje (yellow) got chosen: ${marietje/10}% times`);
  console.log(`Jantje (green) got chosen: ${jantje/10}% times`);

}


// runTests()

// console.log();smallTestEvals
// console.log(testEvals);
// console.log(randomStudent(testEvals));
