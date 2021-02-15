var floatYears, floatDays, floatMonths, floatFortnights, floatWeeks;
//I decided to only use floats cause I think having an extra decimal doesn't hurt.
floatYears = parseFloat(prompt("How old are you?: "));
floatDays = floatYears*365.25;
floatFortnights = floatDays/14;
floatWeeks = floatDays/7;
floatMonths = floatYears * 12;
floatDays.toFixed(2); floatWeeks.toFixed(2); floatFortnights.toFixed(2); floatMonths.toFixed(2); floatYears.toFixed(2);
alert("You've been alive for " + floatYears + " years, " + floatMonths + " months, " + floatFortnights + " fortnights, " + floatWeeks + " weeks, " + floatDays + " days.");