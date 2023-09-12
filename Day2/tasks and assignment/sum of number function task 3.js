function arith(a, b, oper) {
    if (oper == "add") {
        document.write(a + b)
    }
}
arith(parseInt(prompt("enter the 1 number")), parseInt(prompt("enter the 2 number")), "add");
