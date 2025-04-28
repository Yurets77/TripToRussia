import './algorithm.css';
import Line from "./Line";
import LabelOne from "./LabelOne";
import LabelTwo from "./LabelTwo";
import LabelThree from "./LabelThree";
// import LabelFour from "./LabelFour";
import LabelFive from "./LabelFive";
import LabelSix from "./LabelSix";
import LabelSeven from "./LabelSeven";
import LabelEight from "./LabelEight";
import LabelNine from './LabelNine';

export default function AlgoLeftSide() {
    return (
        <div className="left-block">
            <Line/>
            <LabelOne/>
            <LabelTwo/>
            <LabelThree/>
            <LabelFive/>
            <LabelSix/>
            <LabelSeven/>
            <LabelEight/>
            <LabelNine/>
        </div>
    )
}