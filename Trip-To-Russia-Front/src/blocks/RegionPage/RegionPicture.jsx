export default function RegionPicture({info}){


    return(
        <section>
                <div className="container-photo">
                    <img src={info.Region.image} alt={info.Region.name} className="main-photo"/>
                </div>
        </section>

    )
}