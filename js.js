function fibonacci(intIn) {
    var n = Number(intIn);
    if (n == 0) return 0;
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function printFibToElement(limitNo, elementID) {
    if (elementID == null || limitNo == null) return false;
    var n = Number(limitNo);
    if (n < 1 || document.getElementById(elementID) == null || document.getElementById(elementID).innerHTML == null) return false;
    document.getElementById(elementID).innerHTML = "hello";
    document.getElementById(elementID).innerHTML = "";
    var n = Number(limitNo);
    for (var i = 0; i <= n; i++) {
        document.getElementById(elementID).innerHTML += i + ": " + fibonacci(i) + "<br\/>";
    }
}

function printFibToConsoleLog(limitNo) {
    var n = Number(limitNo);
    for (var i = 0; i <= n; i++) {
        console.log(i + ": " + fibonacci(i) + "\n");
    }
}

window.onload = function() {
  toDoWhenPageReady();
};
