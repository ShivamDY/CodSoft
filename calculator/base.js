function Solve(val){
    var v = document.getElementById('result');
    v.value += val;
}

function calculate(){
     var num1= document.getElementById('result').value; 
     var num2= eval(num1);
     document.getElementById('result').value=num2;
}

function deleteOne(){
    var del = document.getElementById('result')
    del.value= del.value.slice(0,-1);
}

function clearAll(){
    var cl = document.getElementById("result");
    cl.value="";
}