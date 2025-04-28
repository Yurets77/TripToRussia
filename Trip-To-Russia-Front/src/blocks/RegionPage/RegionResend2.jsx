export default function RegionResend2({info}) {
    return (
        <section className="section-travel">
            <div className="text-container-travel">
                <h1>{info.ResendBlock2.maintext}</h1>
                <p>{info.ResendBlock2.subtext}</p>
            </div>
            <div className="register-container-travel">
                <a 
                   className="register-button-travel">{info.ResendBlock2.buttontext}</a>
            </div>
        </section>
    )
}