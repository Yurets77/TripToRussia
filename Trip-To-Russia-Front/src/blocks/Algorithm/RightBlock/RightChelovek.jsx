import '/src/blocks/Algorithm/algorithm.css';
import { useState } from 'react';

export default function RightChelovek({ onDaysChange }) {
    const [selectedDays, setSelectedDays] = useState('');

    const handleDaysChange = (event) => {
        const days = event.target.value;
        setSelectedDays(days);
        onDaysChange(days); 
    };

    return (
        <div className="section-dop city-select" data-label="city">
                <div className="city-select marg-bot">
                    <label htmlFor="city">Сколько едет человек?</label>
                    <select id="city">
                        <option value="1">1 человек</option>
                        <option value="2">2 человека</option>
                        <option value="3">3 человека</option>
                        <option value="4">4 человека</option>
                        <option value="5">5 человек</option>
                        <option value="6">6 человек</option>
                        <option value="7+">более 7 человек</option>
                    </select>
                </div>
                <div className="city-select marg-bot">
                    <label htmlFor="days">На сколько дней планируете поездку?</label>
                    <select id="days" value={selectedDays} onChange={handleDaysChange}>
                        <option value="day1-2">1-2 дня</option>
                        <option value="day3-5">3-5 дней</option>
                        <option value="day7-14">7-14 дней</option>
                        <option value="day14+">более 14 дней</option>
                    </select>
                </div>
        </div>
    )
}