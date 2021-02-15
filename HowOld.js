var floatYears, floatDays, floatMonths, floatFortnights, floatWeeks;
//I decided to only use floats cause I think having an extra decimal doesn't hurt.
floatYears = parseFloat(prompt("How old are you?: ")).toFixed(2);
floatDays = (floatYears*365.25).toFixed(2);
floatFortnights = (floatDays/14).toFixed(2);
floatWeeks = (floatDays/7).toFixed(2);
floatMonths = (floatYears * 12).toFixed(2);
alert("You've been alive for " + floatYears + " years, " + floatMonths + " months, " + floatFortnights + " fortnights, " + floatWeeks + " weeks, " + floatDays + " days.");