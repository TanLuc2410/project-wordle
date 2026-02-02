import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
    return <span className={["cell", status].join(" ")}>{letter}</span>;
}

function Guess({ value, answer }) {
    const result = value ? checkGuess(value, answer) : null;
    return (
        <p className="guess">
            {range(5).map((num) => (
                <Cell
                    key={num}
                    letter={result?.[num]?.letter || ""}
                    status={result?.[num]?.status || ""}
                />
            ))}
        </p>
    );
}

export default Guess;
