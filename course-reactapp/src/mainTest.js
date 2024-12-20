// logic programming
function Sum(x, y) {
    return x + y;
}
function Division(x, y) {
    if (x < 0 || y < 0)
        return -1;
    else if (y < x)
        return x / y;
    else
        return y / x;
}
function Factorial(n) {
    return n > 0 ? n * Factorial(n - 1) : 1;
}
console.log(`Factorial de 5 ---> ` + Factorial(5));
console.log("Divisão de 10 por 2 ---> " + Division(10,2));