//Calculating serum osmolality

//Serum Na+
var serumNaMin = 102;
var serumNaMax = 140;

var serumNa = Math.floor(Math.random() * (serumNaMax - serumNaMin + 1)) + serumNaMin;
console.log(serumNa);

//Glucose
var glucoseMin = 70;
var glucoseMax = 150;

var glucose = Math.floor(Math.random() * (glucoseMax - glucoseMin +1)) + glucoseMin;
console.log(glucose);

//BUN
var bunMin = 4;
var bunMax = 30;

var bun = Math.floor(Math.random() * (bunMax - bunMin +1)) + bunMin;
console.log(bun);

//Serum Osmolality
var serumOsm = Math.round((2 * serumNa) + (glucose / 18) + (bun / 2.8));
console.log(serumOsm);

//Answer
function osmFunction() {
	document.open();
    document.write(serumOsm);
    document.close();
}







