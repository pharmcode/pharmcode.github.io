//PATIENT AGE PROGRAM
var ageMin = 18;
var ageMax = 90;

var age = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;


//PATIENT ETHNICITY PROGRAM
var ptEthnicity = ["WM" , "WF" , "AAM" , "AAF" , "HM" , "HF"]
var randEthnicity = ptEthnicity[Math.floor(Math.random() * ptEthnicity.length)];


//PATIENT BLOOD PRESSURE PROGRAM
var systolicMin = 115;
var diastolicMin = 80;
var systolicMax = 200;
var diastolicMax = 120;

var systolicNumber = Math.floor(Math.random() * (systolicMax - systolicMin + 1)) + systolicMin;

var diastolicNumber = Math.floor(Math.random() * (diastolicMax - diastolicMin + 1)) + diastolicMin;


//SPRINT DECISION

function sprintDecision() {
    if (age >= 50) {
      return "correct";
    } else {
    	return "incorrect";
    }
};


