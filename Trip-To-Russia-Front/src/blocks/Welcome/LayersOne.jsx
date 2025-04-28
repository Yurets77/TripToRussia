import '/src/blocks/Welcome/Welcome.css';
import {Link} from "react-router-dom";
export default function LayersOne() {
    return (
    <div className="layers">
		<div className="layers__container">
			<div className="layers__item layer-1 bg-la1"></div>
			<div className="layers__item layer-2 bg-la2"></div>
			<div className="layers__item layer-3">
				<div className="hero-contenttt welcome-write fff">
					<h1 className="TTR-font fff">Trip to Russia </h1>
					<div className="hero-content__p1 welcome-write">Откройте для себя мир, который ждет Вас!</div>
					<a>
					<Link to='index'>
					<button className="button-start-welcome welcome-write">
						Начать путешествие
					</button>
					</Link>
					</a>
					
				</div>
			</div>
			<div className="layers__item layer-4"></div>
			<div className="layers__item layer-5 bg-la5"></div>
			<div className="layers__item layer-6 bg-la6"></div>
		</div>
	</div>
    )
}