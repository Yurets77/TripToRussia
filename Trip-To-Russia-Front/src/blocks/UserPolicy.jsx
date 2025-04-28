import Header from './Header';
import Footer from './Footer';
import UserPolicyMain from './UserPolicy/UserPolicyMain';
import '/src/blocks/UserPolicy/userPolicy.css';

export default function UserPolicy() {
    return (
        <section>
            <Header/>
            <UserPolicyMain/>
            <Footer/>
        </section>
    )
}