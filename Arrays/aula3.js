 var keys = [];

 with (Array.prototype) {
    keys.push('alguma coisa');
 }

 Object.keys(Array.prototype[Symbol.unscopables]);

 console.log(keys);


