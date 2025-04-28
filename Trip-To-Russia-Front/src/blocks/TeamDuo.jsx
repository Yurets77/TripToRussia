import Footer from "./Footer";
import Header from "./Header";
import TeamFirst from "./Team/TeamFirst";
import TeamLine from "./Team/TeamLine";
import TeamProject from "./Team/TeamProject";
import TeamSecond from "./Team/TeamSecond";
import '/src/blocks/Team/team.css';

export default function TeamDuo() {
    return (
        <section>
        <Header/>
        <TeamProject/>
        <TeamFirst/>
        <TeamLine/>
        <TeamSecond/>
        <TeamLine/>
        <Footer/>
        </section>
    )
}