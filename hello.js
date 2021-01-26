var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var stringFirstName = prompt("Enter your first name: ");
    if (!isNaN(stringFirstName)) {
        alert("You did not enter a valid first name, so I will call you Child.  Hello Child!");
    } else
    {
        alert("Howdy "+ stringFirstName +"! It's great to meet you!");  
    }
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}