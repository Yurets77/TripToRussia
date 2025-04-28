import UserData from "./UserData.jsx";
import UserContacts from "./UserContacts.jsx";
import LogoutButton from "./LogoutButton.jsx";


export default function UserInfo(){
    return(
        <section>
            <UserData/>
            <UserContacts/>
            <LogoutButton/>
        </section>
    )
}