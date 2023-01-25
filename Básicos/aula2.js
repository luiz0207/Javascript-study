function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = o;

        for(var k = 0; k < 10; k++) {
            console.log(k);
        }
        console.log(k)
    }
    console.log(j);
}





var square = function (x) {
    return x *x;        //multiplicação
}

console.log(square(10))