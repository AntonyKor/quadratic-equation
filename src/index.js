module.exports = function solveEquation(equation) {
    let clearEquation = equation.split('').filter((item) => item!==" ").join(''),
    a = +clearEquation.slice(0,clearEquation.indexOf("*"));
    clearEquation = clearEquation.slice(clearEquation.indexOf("x")+3);
    b = +clearEquation.slice(0,clearEquation.indexOf("*"));
    clearEquation = clearEquation.slice(clearEquation.indexOf("x")+1);
    c = +clearEquation;
    let d = b*b - 4*a*c;
    console.log(a+' '+b+' '+c+'   '+d);
    return [((-b+Math.sqrt(d))/(2*a)).toFixed(0),((-b-Math.sqrt(d))/(2*a)).toFixed(0)].sort((left, right) => left - right);
}