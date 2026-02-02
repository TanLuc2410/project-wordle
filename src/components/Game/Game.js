import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import RestartButton from "../RestartButton";

// Flow:
// Step 1: User type in GuessForm Component (local state) and when all validations passed, pass the result input (string) to the function that update Guesses, which will turn it into an array.
// Step 2: Pass the Guesses array to the GuessResults Component
// Step 3: The GuessResults Component will use range utility function to loop through the NUM_OF_GUESSES_ALLOWED times and create the same amount of p.guess tags. Because the position of these tags will not change, using number/indexes as key will not be a problem.
//**NOTE: Because the Guesses array and the range(NUM_OF_GUESSES_ALLOWED) array are identical in position, accessing value through guesses[num/index] is valid.
// Step 4: In Guess Component, using range function again to create an array of 5 numbers/indexes and map through it to create span.cell with the value will be taken from the value prop passed from GuessResults Component.
// **NOTE: because the value string will be 5 letters (the same as the range(5).map()), using the numbers generated from the range function as indexes and keys are valid. (Mind-blowing as hell). Also, the value of each cell will be from the value prop and can be accessed with value[num].
// Step 5: Passing the answer from the Game Component down to Guess Component and use checkGuess function helper to check the guess (obviously, lol) and generate an array of objects and use that to determine the status of each cell. The status then will be used to put the className for CSS to use. (using conditionals)

function Game() {
    const [answer, setAnswer] = React.useState(() => sample(WORDS));
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState("running");

    console.info({ answer });

    const updateGuess = (guessInput) => {
        const nextGuess = [...guesses, guessInput];
        setGuesses(nextGuess);

        if (answer === guessInput.toUpperCase()) {
            setGameStatus("won");
        } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lost");
        }
    };

    const resetGame = () => {
        setGuesses([]);
        setGameStatus("running");
        setAnswer(() => sample(WORDS));
    };

    return (
        <>
            {gameStatus !== "running" && (
                <RestartButton resetGame={resetGame} />
            )}
            <p>{gameStatus}</p>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessForm updateGuess={updateGuess} gameStatus={gameStatus} />
            {gameStatus === "won" && <WonBanner count={guesses.length} />}
            {gameStatus === "lost" && <LostBanner answer={answer} />}
        </>
    );
}

export default Game;
