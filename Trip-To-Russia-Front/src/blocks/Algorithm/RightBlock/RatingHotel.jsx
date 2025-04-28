import '/src/blocks/Algorithm/algorithm.css';

export default function RatingHotel({ onRatingChange, onClassChange }) {
    const handleRatingChange = (event) => {
        onRatingChange(event.target.value);
    };

    const handleClassChange = (event) => {
        onClassChange(event.target.value);
    };

    return (
        <div className="section-algo city-select dop4" data-label="city">
            <div className="city-select">
                <label htmlFor="city">Рейтинг отеля</label>
                <select id="stars-rating-hotel" onChange={handleRatingChange}>
                    <option value="">Любой</option>
                    <option value="rating1">★☆☆☆☆</option>
                    <option value="rating2">★★☆☆☆</option>
                    <option value="rating3">★★★☆☆</option>
                    <option value="rating4">★★★★☆</option>
                    <option value="rating5">★★★★★</option>
                </select>
            </div>
            <div className="city-select">
                <label htmlFor="city">Класс отеля</label>
                <select id="class-hotel" onChange={handleClassChange}>
                    <option value="">Любой</option>
                    <option value="class1">Эконом</option>
                    <option value="class2">Комфорт</option>
                    <option value="class3">Люкс</option>
                </select>
            </div>
        </div>
    )
}
