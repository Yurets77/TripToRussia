export default function Why({info}) {
    return (
        <section className="marg-bottt">
            <h1 className="TextWhy">Почему стоит посетить {info.Why.name}</h1>
            <div className="ToCenter">
                <p className="opucanie">{info.Why.p1}</p>
                <p className="opucanie">{info.Why.p2}</p>
                <ul className="opucanie">
                    <li>{info.Why.p3}</li>
                    <li>{info.Why.p4}</li>
                    <li>{info.Why.p5}</li>
                </ul>
                <p className="opucanie">{info.Why.p6}</p>
            </div>

        </section>
    )
}