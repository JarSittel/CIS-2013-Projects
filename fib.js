
var $ = function (id) 
{
    return document.getElementById(id);
}


var generate = function () 
{
	var intCount = parseInt($("total_fib").value);
	if(isNaN(intCount) === true ||  intCount > 100  ||  intCount <  2){//Validate
        $("output").value = "Put in a number from 2-100.";
        $("total_fib").value = "";
    }
    else{
        var i=0; var j=1; var k; //Declare Variables
        for(var l = 0; l < intCount; l += 1)//Loop
            {
                k = i+j; i = j; j = k;//Calculate
            }
        $("output").value = k;//Output

    }

} 



window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate;
}  