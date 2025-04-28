export default function RegionResend({info}) {
    return (
        <section className="section-travel">
            <div className="text-container-travel">
                <h1>{info.ResendBlock1.maintext}</h1>
                <p>{info.ResendBlock1.subtext}</p>
            </div>
            <div className="register-container-travel">
                <a href="https://www.aviasales.ru/" className="register-button-travel">{info.ResendBlock1.buttontext}</a>
            </div>
        </section>
    )
}