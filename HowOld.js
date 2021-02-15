var floatYears, floatDays, floatMonths, floatFortnights, floatWeeks;
floatYears = parseFloat(prompt("How old are you?: "));
floatDays = floatYears*365.25;
floatFortnights = floatDays/14;
floatWeeks = floatDays/7;
floatMonths = floatYears * 12;
alert("You've been alive for " + floatYears + " years, " + floatMonths + " months, " + floatFortnights + " fortnights, " + floatWeeks + " weeks, " + floatDays + " days.");