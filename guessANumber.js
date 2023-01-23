function guessANumber() {
    const readLine = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsyncReadLine = function (){
        readLine.question('Guess the number(0-100):', number => {
            guess = Number(number);

            if(guess <= 100 && guess >= 0){
                if(guess == computerGuess){
                    console.log('You guess it!');
                    return readLine.close();
                } else if(guess < computerGuess){
                    console.log('Too low!');
                    recursiveAsyncReadLine()
                } else if(guess > computerGuess){
                    console.log('Too High!');
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine();
            }
        })
    }
    recursiveAsyncReadLine();
} 

guessANumber();