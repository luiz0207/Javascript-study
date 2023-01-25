function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}  //5! = 5x 4 x 3 x 2 x 1 = 120

console.log(fatorial(5))