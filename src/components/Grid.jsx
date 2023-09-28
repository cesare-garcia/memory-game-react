import "./Grid.css";
import Card from "./Card";

function Grid(props) {


    return (

        <div className = "gameGrid">
            <Card allInfo={props.allInfo} position="p1" name="Paul"></Card>    
            <Card allInfo={props.allInfo} position="p2" name="Leto"></Card>
            <Card allInfo={props.allInfo} position="p3" name="Jessica"></Card>
            <Card allInfo={props.allInfo} position="p4" name="Duncan"></Card>
            <Card allInfo={props.allInfo} position="p5" name="Gurney"></Card>
            <Card allInfo={props.allInfo} position="p6" name="Baron"></Card>
            <Card allInfo={props.allInfo} position="p7" name="Raban"></Card>
            <Card allInfo={props.allInfo} position="p8" name="Chani"></Card>
            <Card allInfo={props.allInfo} position="p9" name="Stilgar"></Card>
            <Card allInfo={props.allInfo} position="p10" name="Irulan"></Card>
            <Card allInfo={props.allInfo} position="p11" name="Feyd"></Card>
            <Card allInfo={props.allInfo} position="p12" name="Margot"></Card>
        </div>
    )

}

export default Grid;