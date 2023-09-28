import "./Card.css"

function Card(props) {

    const selRec = props.allInfo.sRecord;
    const selRecChanger = props.allInfo.seRecord;
    let nonStateCS = props.allInfo.cScore;
    const cScoreChanger = props.allInfo.cSet;
    const bScore = props.allInfo.bScore;
    const bScoreChanger = props.allInfo.bSet;

    const handleClick = (e) => {

        let selectedCardInfo;
        if (e.target.classList.contains("card")) selectedCardInfo = e.target.getAttribute("data-name").toLowerCase();
        if (e.target.classList.contains("cardTop")) selectedCardInfo = e.target.getAttribute("data-topname").toLowerCase();
        if (e.target.classList.contains("cardBottom")) selectedCardInfo = e.target.innerText.toLowerCase();
        if (selRec[`${selectedCardInfo}`] === false) {

            nonStateCS++;
            if (nonStateCS > bScore) {
                cScoreChanger(prevState => (prevState + 1));
                bScoreChanger(nonStateCS);
                selRecChanger(prevState => ({...prevState, [`${selectedCardInfo}`]: true}));

            } else {
                cScoreChanger(prevState => (prevState + 1));
                selRecChanger(prevState => ({...prevState, [`${selectedCardInfo}`]: true}));

            }

        } else {
            cScoreChanger(0);
            selRecChanger({
                paul: false,
                leto: false,
                jessica: false,
                duncan: false,
                gurney: false,
                baron: false,
                raban: false,
                chani: false,
                stilgar: false,
                irulan: false,
                feyd: false,
                margot: false
            });

        }

    }

    return (
        <div className="card" id={props.position} onClick={handleClick} data-name={props.name}>
            <div className="cardTop" data-topname={props.name}></div>    
            <div className="cardBottom">
                {props.name}
            </div>
        </div>
    )

}

export default Card;