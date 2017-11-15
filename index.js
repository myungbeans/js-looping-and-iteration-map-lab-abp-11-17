// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(e){
    return e.toLowerCase()
  })
}

function nameToAttributes(names){
  //names = ['Bobby Smith', 'Sammy Watkins']
  return names.map(function(name){
    let fName=name.split(" ")[0]
    let lName=name.split(" ")[0]
    return {firstName: firstName, lastName: lName}
  })


  //[{firstName: "Bobby", lastName: "Smith"}, {firstName: "Sammy", lastName; "Watkins"}]
}
