import '/src/blocks/Algorithm/algorithm.css';

export default function TransportRight() {
    return (
    <div className="section-algo" data-label="transport">
        <div className="transport-option ma-top-block">
            <input type="checkbox" id="plane"/>
            <img src="./Photo/Algorithm/plane.png" alt="Самолет"/>
            <label htmlFor="plane">Самолет</label>
        </div>
        <div className="transport-option ma-top-block">
            <input type="checkbox" id="bus"/>
            <img src="./Photo/Algorithm/bus.png" alt="Автобус"/>
            <label htmlFor="bus">Автобус</label>
        </div>
        <div className="transport-option ma-top-block">
            <input type="checkbox" id="train"/>
            <img src="./Photo/Algorithm/train.png" alt="Поезд"/>
            <label htmlFor="train">Поезд</label>
        </div>
        {/* <button className="save-button">Продолжить</button> */}
    </div>
    )
}