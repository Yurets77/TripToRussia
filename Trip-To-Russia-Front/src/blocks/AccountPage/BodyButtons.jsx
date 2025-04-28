import { Link, useLocation, Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo.jsx";
import UserPurchases from "./UserPurchases.jsx";
import ChangeUserData from "./ChangeUserData.jsx";
import ChangeContacts from "./ChangeUserContacts.jsx";

export default function BodyButtons() {
    const location = useLocation();

    return (
        <section className="section-account-page">
            <div className="body-naming">
                <h1 className="naming-page-h1">Профиль</h1>
                <div></div>
            </div>
            <div className="body-buttons-container">
                <div></div>
                <div>
                    <Link to="/Account/" className="no-underline">
                        <button
                            className={`body-button ${location.pathname === "/Account/" ? "active-button" : ""}`}
                        >
                            Учетная запись
                        </button>
                    </Link>
                    <Link to="Purchases" className="no-underline">
                        <button
                            className={`body-button ${location.pathname === "/Account/Purchases" ? "active-button" : ""}`}
                        >
                            Покупки
                        </button>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<UserInfo />} />
                <Route path="Purchases" element={<UserPurchases />} />
                <Route path="ChangeInfo" element={<ChangeUserData />} />
                <Route path="ChangeContacts" element={<ChangeContacts />} />
            </Routes>
        </section>
    );
}