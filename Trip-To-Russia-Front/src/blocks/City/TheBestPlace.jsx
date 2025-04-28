export default function TheBestPlace({info}) {
    return (
        <section>
            <div className="container-main-reg">
                <div className="text-team-reg">
                    <h1 className="zagolovok-reg"><u>{info.TheBestPlaceMahachkala.name} - прекрасное место!</u></h1>
                    <p className="description-reg">{info.TheBestPlaceMahachkala.descr1}</p>
                    <p className="description-reg">{info.TheBestPlaceMahachkala.descr2}</p>
                    <p className="description-reg">{info.TheBestPlaceMahachkala.descr3}</p>
                </div>
                <div>
                    <img src={info.TheBestPlaceMahachkala.image} alt={info.TheBestPlaceMahachkala.name} className="img-portfolio-reg"/>
                </div>
            </div>
        <div className="line-reg"></div>
        </section>
    )
}