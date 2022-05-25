function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function absDiff(a, b) {
    if (a - b < 0) { return b - a; }
    else { return a - b; }
}

export { add, subtract, multiplication, absDiff };