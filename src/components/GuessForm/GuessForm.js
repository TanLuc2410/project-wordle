import React from "react";

function GuessForm({ updateGuess, gameStatus }) {
    const [input, setInput] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (input.length !== 5) {
            window.alert("Please type in 5 letters 😍.");
            return;
        }

        updateGuess(input);

        setInput("");
    }

    function handleInputChange(event) {
        const nextValue = event.target.value.toUpperCase();

        if (nextValue.length <= 5 && /^[A-Z]*$/.test(nextValue)) {
            setInput(nextValue);
        }
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                disabled={gameStatus !== "running"}
                type="text"
                id="guess-input"
                value={input}
                onChange={handleInputChange}
                minLength={5}
                maxLength={5}
                autoFocus
                autoComplete="off"
            />
        </form>
    );
}

export default GuessForm;
