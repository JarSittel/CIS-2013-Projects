
var $ = function (id) 
{
    return document.getElementById(id);
}

 var calculate = function(floatMonthlyPayment, intLoanTerm)
 {
    var floatTotalCost;
    floatMonthlyPayment.get();
    intLoanTerm.get();
    floatTotalCost = floatMonthlyPayment*intLoanTerm;
     return floatTotalCost;
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate($("loan_length"), $("monthly_payment"));
    $("monthly_payment").focus();
}