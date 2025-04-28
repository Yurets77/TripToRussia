export default function History({info}) {
    return (
        <section>
            <h1 className="TextWhy">История и культура</h1>
            <div className="ToCenter">
                <p className="opucanie">{info.History.p1}</p>
                <p className="opucanie">{info.History.p2}</p>
                <p className="opucanie">{info.History.p3}</p>
                <p className="opucanie">{info.History.p4}</p>
                <ul className="opucanie">
                    <li>{info.History.p5}</li>
                    <li>{info.History.p6}</li>
                    <li>{info.History.p7}</li>
                    <li>{info.History.p8}</li>
                </ul>
            </div>

        </section>
    )
}