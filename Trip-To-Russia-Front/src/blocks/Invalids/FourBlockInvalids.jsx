export default function FourBlockInvalids() {
    return (
    <div className="container321-inv">
        {/* <h1 className="h1ss-inv">Пакеты для любого бюджета</h1> */}
        <p className="p2ss-inv">Мы предлагаем доступные цены для организации путешествия Вашей мечты. </p>
            <form action="form-inv">
                <div className="row-inv">
                    <label className="special-label-inv" htmlFor="firstName">Имя:</label>
                    <input className="row-inv-input" type="text" id="firstName" name="firstName" placeholder="Введите имя" required/>
                </div>
                <div className="row-inv">
                    <label className="special-label-inv" htmlFor="lastName">Фамилия:</label>
                    <input className="row-inv-input" type="text" id="lastName" name="lastName" placeholder="Введите фамилию" required/>
                </div>
                <div className="row-inv">
                    <label className="special-label-inv" htmlFor="email">Почта:</label>
                    <input className="row-inv-input" type="email" id="email" name="email" placeholder="Введите электронную почту" required/>
                </div>
                <div className="row-inv">
                    <label className="special-label-inv" htmlFor="phoneNumber">Номер телефона:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Введите номер телефона" required/>
                </div>
                <div className="row-inv">
                    <label className="special-label-inv" htmlFor="message">Сообщение:</label>
                    <textarea className="textarea-inv" id="message" name="message" rows={2} maxLength={300} placeholder="Введите сообщение" required></textarea>
                </div>
                <div className="row1-inv policy-block-inv">
                    <input className="click-on-inv margin-top-inv" type="checkbox" id="privacyPolicy" name="privacyPolicy" required/>
                    <a className="label-down-inv" htmlFor="privacyPolicy" href="kyda-to">Согласен с политикой конфиденциальности</a>
                </div>
                <button className="buttonInv" type="submit">Отправить</button>
            </form>
    </div>
    )
}