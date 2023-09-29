import { useState } from "react";
import "./Grid.css";
import Card from "./Card";

function Grid(props) {

    const characters = [
        {image: props.gifData.data[0].images.fixed_height.url, name: "Paul"},
        {image: props.gifData.data[9].images.fixed_height.url, name: "Leto"},
        {image: props.gifData.data[3].images.fixed_height.url, name: "Jessica"},
        {image: props.gifData.data[1].images.fixed_height.url, name: "Duncan"},
        {image: props.gifData.data[4].images.fixed_height.url, name: "Gurney"},
        {image: props.gifData.data[7].images.fixed_height.url, name: "Baron"},
        {image: props.gifData.data[2].images.fixed_height.url, name: "Raban"},
        {image: props.gifData.data[5].images.fixed_height.url, name: "Chani"},
        {image: props.gifData.data[6].images.fixed_height.url, name: "Stilgar"},
        {image: props.gifData.data[8].images.fixed_height.url, name: "Irulan"},
        {image: props.gifData.data[10].images.fixed_height.url, name: "Feyd"},
        {image: props.gifData.data[11].images.fixed_height.url, name: "Margot"}
    ]

    const [cardOrder, setCardOrder] = useState(characters);
    
    const randomizeCards = (e) => {
        e.preventDefault();
        let temporaryArray = [];
        let elementIndex = 0;
        let placementCounter = 0;
        let allPlaced = false;
        let randomIndex;
        while (!allPlaced) {
          randomIndex = Math.floor(Math.random()*12);
          if (temporaryArray[randomIndex] === undefined) {
            temporaryArray[randomIndex] = characters[elementIndex];
            elementIndex++;
            placementCounter++;
            if (placementCounter === 12) allPlaced = true;
    
          }
    
        }
        setCardOrder(temporaryArray);
    
    }

    let cardObject = {
        order: cardOrder,
        orderfunc: setCardOrder,
        pool: characters,
        randomizer: randomizeCards
    }

    return (

        <div className = "gameGrid">
            <Card card={cardObject} orderInfo={cardOrder[0]} allInfo={props.allInfo} position="0"></Card>    
            <Card card={cardObject} orderInfo={cardOrder[1]} allInfo={props.allInfo} position="1"></Card>
            <Card card={cardObject} orderInfo={cardOrder[2]} allInfo={props.allInfo} position="2"></Card>
            <Card card={cardObject} orderInfo={cardOrder[3]} allInfo={props.allInfo} position="3"></Card>
            <Card card={cardObject} orderInfo={cardOrder[4]} allInfo={props.allInfo} position="4"></Card>
            <Card card={cardObject} orderInfo={cardOrder[5]} allInfo={props.allInfo} position="5"></Card>
            <Card card={cardObject} orderInfo={cardOrder[6]} allInfo={props.allInfo} position="6"></Card>
            <Card card={cardObject} orderInfo={cardOrder[7]} allInfo={props.allInfo} position="7"></Card>
            <Card card={cardObject} orderInfo={cardOrder[8]} allInfo={props.allInfo} position="8"></Card>
            <Card card={cardObject} orderInfo={cardOrder[9]} allInfo={props.allInfo} position="9"></Card>
            <Card card={cardObject} orderInfo={cardOrder[10]} allInfo={props.allInfo} position="10"></Card>
            <Card card={cardObject} orderInfo={cardOrder[11]} allInfo={props.allInfo} position="11"></Card>
        </div>
    )

}

export default Grid;