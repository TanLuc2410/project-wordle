import Guess from "../Guess";
// import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess
                    value={guesses[num] ? guesses[num] : null}
                    key={num}
                    answer={answer}
                />
            ))}
        </div>
    );
}

export default GuessResults;
