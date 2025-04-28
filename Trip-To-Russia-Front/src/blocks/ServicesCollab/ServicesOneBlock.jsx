export default function ServicesOneBlock() {
    return (
        <div className="container-serv">
            <a href="https://guides.ru">
                <div className="block-serv style-back">
                    <img src="./Photo/ServicesCollaboration/logo-white.png" alt="Логотип" className="logo-serv"/>
                    <div className="text-serv">Лучшие гиды</div>
                </div>
            </a>
            <a href="https://example.com">
            <div className="block-serv style-back-2">
                <img src="./Photo/ServicesCollaboration/logo-white.png" alt="Логотип" className="logo-serv"/>
                <div className="text-serv">Перелетная компания</div>
            </div>
            </a>
            <a href="https://example.com">
            <div className="block-serv style-back-3">
                <img src="./Photo/ServicesCollaboration/logo-white.png" alt="Логотип" className="logo-serv"/>
                <div className="text-serv">Перевозка людей с ограниченными возможностями</div>
            </div>
            </a>
        </div>
    )
}