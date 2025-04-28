import { Link } from 'react-router-dom';
import '/src/blocks/Welcome/Welcome.css';

export default function LayersThree() {
    return (
        <div className="la-cont layers__container ">
					<div className="layers__item layer-3">
						<div className="hero-content1">
							<h1 className="welcome-write">Путешествия для всех!</h1>
							    <div className="hero-content__p1 welcome-write">Наша миссия – сделать путешествия доступными для всех. Обратитесь к нам за помощью, и мы позаботимся о ваших потребностях! </div>
									<a>
									<Link to='/invalids'>
                                    <button className="button-start-welcome welcome-write">
							            Начать путешествие
						            </button>
									</Link>
                                    </a>
						</div>
					</div>
		</div>
        
    )
}