import Line from "./Line";
import MustVisit from "./MustVisit";

export default function Visit({info}) {
    return (
        <section>
            <Line/>
            <MustVisit info={info}/>
        </section>
    )
}