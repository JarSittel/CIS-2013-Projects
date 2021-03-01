
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
    var floatMonthlyPayment, intLoanTerm;
    $("loan_length").value = floatMonthlyPayment;
    $("total_cost").value = intLoanTerm;
    $("calc").onclick = calculate(floatMonthlyPayment, intLoanTerm);
    $("monthly_payment").focus();
}