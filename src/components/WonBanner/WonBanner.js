import Banner from "../Banner";

function WonBanner({ count }) {
    return (
        <Banner status="happy">
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>{count === 1 ? "1 guess" : `${count} guesses`}</strong>.
            </p>
        </Banner>
    );
}

export default WonBanner;
