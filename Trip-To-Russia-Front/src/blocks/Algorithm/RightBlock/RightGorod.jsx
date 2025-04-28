import '/src/blocks/Algorithm/algorithm.css';
import { useState } from 'react';

export default function RightGorod({ onCityChange, onDateChange }) {
    const [selectedDate, setSelectedDate] = useState('');
    const handleCityChange = (event) => {
        onCityChange(event.target.value);
    };

    const handleDateChange = (event) => {
        const date = event.target.value.split('-').join('.');
        setSelectedDate(date);
        onDateChange(date);
    };

    return (
        <div className="section-dopdop city-select" data-label="city">
            <div className="city-select">
                <label htmlFor="city">Выберите город</label>
                <select id="city" onChange={handleCityChange}>
                    <option value="Москва">Москва, Россия</option>
                    <option value="Санкт-Петербург">Санкт-Петербург, Россия</option>
                    <option value="Новосибирск">Новосибирск, Россия</option>
                    <option value="Сочи">Сочи, Россия</option>
                    <option value="Екатеринбург">Екатеринбург, Россия</option>
                    <option value="Казань">Казань, Россия</option>
                    <option value="Нижний Новгород">Нижний Новгород, Россия</option>
                    <option value="Ростов-на-Дону">Ростов-на-Дону, Россия</option>
                    <option value="Уфа">Уфа, Россия</option>
                    <option value="Омск">Омск, Россия</option>
                    <option value="Воронеж">Воронеж, Россия</option>
                    <option value="Дагестан">Дагестан, Россия</option>
                </select>
            </div>
            <div className="date-select">
                <label htmlFor="date">Дата прибытия</label>
                <input type="date" id="date" value={selectedDate} onChange={handleDateChange}/>
            </div>
        </div>  
    );
}
