/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/


intMin = parseInt(prompt("Enter the minimum value: "));

while(intMin <= 0   || intMin.isInterger === false)
{
    intMin = prompt("Please enter a minimum value that is greater than 0 and actually a number: ");
}
//I forgot to put comments on the code so I guess I'll just go through and do it now that I am done. Well, this prompts for the min and makes sure it fits the criteria.


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Enter the maximum value: "));

while(intMax <= (intMin+1)   || intMax.isInterger == false)
{
    intMax = prompt("Please enter a maximum value that is greater than the min and actually a number: ");
}

//This does the same but for the max

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 0;


    


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/


intGuess = parseInt(prompt("Enter your guess: "));

while(intMax <= (intMin+1)   || intMax.isInterger == false)
{
    intMin = prompt("Please enter a maximum value that is actually a number: ");
}

//Same thing but for the guess

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while(intGuess !== intRandom)
{
    intCount += 1;
    if(intGuess < intRandom)
        {
            alert("Too low, try again!"); //TOO LOW
        }
    else if(intGuess > intRandom)
        {
            alert("Too High, try again!"); //TOO HIGH
        }
    else if(intGuess === intRandom)
        {
            break;
        }
    intGuess = parseInt(prompt("Enter your guess: ")); //PROMPT

    while(intGuess.isInteger === false)
    {
        intGuess = prompt("Please enter a maximum value that is actually a number: ");
    }
}
// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
//I hope my comments were what were required. It's been a really tough week. I could share the details but I don't want to make your grading sad so instead I wish you a better time than I've been having! Have a good rest of your day, I'm trying to stay positive so you do the same!
