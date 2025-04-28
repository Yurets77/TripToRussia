import CityText from "./CityText";
import CityTypeAndType from "./CityTypeAndType";

export default function CityDescription({info}) {
    return (
        <section className="section-city">
            <CityText info={info}/>
            <CityTypeAndType info={info}/>
        </section>
    )
}