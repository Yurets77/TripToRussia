export default function MainPhoto({info}){
    return(
        <section>
            <div className="container-photo">
                <img src={info.mainPhoto} alt="" className="main-photo"/>
            </div>
        </section>
    )
}