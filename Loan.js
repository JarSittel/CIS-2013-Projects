
var $ = function (id) 
{
    return document.getElementById(id);
}

 var calculate = function()
 {
    var floatTotalCost, floatMonthlyPayment, intLoanTerm;
    floatMonthlyPayment = $("monthly_payment").value;
    intLoanTerm = $("loan_length").value;
    floatTotalCost = floatMonthlyPayment*intLoanTerm;
    $("total_cost").value = floatTotalCost;
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("monthly_payment").focus();
    $("calc").onclick = calculate();
    
}