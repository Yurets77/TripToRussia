import '/src/blocks/Algorithm/algorithm.css';

export default function Guide() {
    return (
    <div className="section-algo1" data-label="travel-type">
        <div className="checkbox-group">
            <input type="checkbox" id="Da"/>
            <label htmlFor="Da">Да</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="Net"/>
            <label htmlFor="Net">Нет</label>
        </div>
        {/* <button className="save-button">Продолжить</button> */}
    </div>
    )
}