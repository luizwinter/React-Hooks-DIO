const Quotes = ({ quote, speaker })=> {
    return(
        <div>
        <p>{quote}</p>
        <p>- {speaker}</p>
        <button>Click</button>
        </div>
    )
};

export default Quotes;