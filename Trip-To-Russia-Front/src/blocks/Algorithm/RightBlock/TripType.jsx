import '/src/blocks/Algorithm/algorithm.css';

export default function TripType() {
    return (
    <div className="section-algo" data-label="travel-type">
        <div className="checkbox-group">
            <input type="checkbox" id="educational"/>
            <label htmlFor="educational">Познавательное</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="family"/>
            <label htmlFor="family">Семейный отдых</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="ecotourism"/>
            <label htmlFor="ecotourism">Экотуризм</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="cultural"/>
            <label htmlFor="cultural">Культурное</label>
        </div>
        <p className="dop3">Все выбранные пункты учитываются для подбора подходящего для Вас варианта!</p>
        {/* <button className="save-button">Продолжить</button> */}
    </div>
    )
}