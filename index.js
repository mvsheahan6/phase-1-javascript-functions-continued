// code your solution here
// function saturdayFun (activity = "roller-skate") {
//     console.log `This Saturday I want to ${activity}`
// }

function saturdayFun(funThing="roller-skate") {
  return `This Saturday, I want to ${funThing}!`
};

saturdayFun("bathe my dog");

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
};

mondayWork();

function wrapAdjective(flair = "*") {
  return function(inn = "special") {
    return `You are ${flair}${inn}${flair}!`
  }
}

