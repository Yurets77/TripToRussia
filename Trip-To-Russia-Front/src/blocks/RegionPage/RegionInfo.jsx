import RegionTitle from "./RegionTitle.jsx";
import RegionTypes from "./RegionTypes.jsx";


export default function RegionInfo({info}) {
    return(
        <section className="section-city">
            <RegionTitle info={info}/>
            <RegionTypes info={info}/>
        </section>
    )
}