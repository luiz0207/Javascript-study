var x = 0; 
[x, x+1, x+2].forEach(console.log)






    var s = "text", n = 1, b = true;
    var s = new String(s); //objeto
    var n = new Number(n); //objeto
    var b = new Boolean(b)//objeto
    console.log(s, s, n , b);




    var a = ['a', 'b', 'c'];
    var b = [];
    for (var i = 0;  i < a.length; i++) {
        b[i] = a[i];  //copia elemento de a em b
    }
    console.log(a, b);



    null == undefined
    "0" == 0 //string convertida em numeros
    0  == false //booleano convertido em números
    "0" == false

    var now = new Date();
    typeof (now + 1)
    typeof (now - 1)
    console.log(now)


  //repetição  
  for( var i = 0; i < 10; i++) console.log(i);



    //Escopo de variável
    var scope = "global";
    function checkscope() {
        var scope = "local";
        return scope;
    }
    console.log(checkscope())


    scope = "global";
    function checkscope2(){
        scope = "local";
        myscope = "local";
        return [scope, myscope]
    }
    console.log(checkscope2())

    


    var scope = "global scope";
    function checkscope3() {
        var scope = "local scope";
        function nested() {
            var scope = "nested scope";
            return scope;
        }
        return nested
    }
    console.log(checkscope3());




   