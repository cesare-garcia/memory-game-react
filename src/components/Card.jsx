import "./Card.css"

function Card(props) {

    const selRec = props.allInfo.sRecord;
    const selRecChanger = props.allInfo.seRecord;
    let nonStateCS = props.allInfo.cScore;
    const cScoreChanger = props.allInfo.cSet;
    const bScore = props.allInfo.bScore;
    const bScoreChanger = props.allInfo.bSet;
    const cardIndex = Number(props.position);
    let displayName;

    if (props.orderInfo.name === "Paul") displayName = "Paul Atreides";
    if (props.orderInfo.name === "Leto") displayName = "Leto Atreides";
    if (props.orderInfo.name === "Jessica") displayName = "Lady Jessica Of The Atreides";
    if (props.orderInfo.name === "Duncan") displayName = "Duncan Idaho";
    if (props.orderInfo.name === "Gurney") displayName = "Gurney Halleck";
    if (props.orderInfo.name === "Baron") displayName = "Vladimir Harkonnen";
    if (props.orderInfo.name === "Raban") displayName = "Glossu Rabban";
    if (props.orderInfo.name === "Chani") displayName = "Chani Kynes";
    if (props.orderInfo.name === "Stilgar") displayName = "Stilgar of Sietch Tabr";
    if (props.orderInfo.name === "Irulan") displayName = "Irulan Corrino";
    if (props.orderInfo.name === "Feyd") displayName = "Feyd-Rautha Harkonnen";
    if (props.orderInfo.name === "Margot") displayName = "Margot Fenring";

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
                props.card.randomizer(e);

            } else {
                cScoreChanger(prevState => (prevState + 1));
                selRecChanger(prevState => ({...prevState, [`${selectedCardInfo}`]: true}));
                props.card.randomizer(e);

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
            props.card.randomizer(e);
        }

    }

    return (
        <div className="card" onClick={handleClick} data-name={props.orderInfo.name}>
            <img data-topname={props.orderInfo.name} className="cardTop"src={props.orderInfo.image} alt="dune character"/>      
            <p className="cardBottom">
                {displayName}
            </p>
        </div>
    )

}

export default Card;