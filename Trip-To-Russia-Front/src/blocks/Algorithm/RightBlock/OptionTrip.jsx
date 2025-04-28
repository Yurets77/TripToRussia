import '/src/blocks/Algorithm/algorithm.css';
import { useState } from 'react';

export default function OptionTrip({ onOptionsChange }) {
    const [options, setOptions] = useState({
        bassein: false,
        otrkBassein: false,
        kritiyBassein: false,
        wifi: false,
        parkovka: false,
        reception24h: false,
        plyazh: false,
        baniSayni: false,
        animals: false,
        spa: false,
        restoraniBari: false,
        sportzal: false,
    });

    const handleOptionChange = (event) => {
        const { id, checked } = event.target;
        const newOptions = { ...options, [id]: checked };
        setOptions(newOptions);
        onOptionsChange(newOptions); // Передача изменений наверх
    };

    return (
        <div className="section-algo1" data-label="travel-type">
            {Object.keys(options).map((key) => (
                <div className="checkbox-group" key={key}>
                    <input 
                        type="checkbox" 
                        id={key} 
                        checked={options[key]} 
                        onChange={handleOptionChange} 
                    />
                    <label htmlFor={key}>{getLabel(key)}</label>
                </div>
            ))}
        </div>
    );
}

function getLabel(key) {
    const labels = {
        bassein: 'Бассейн',
        otrkBassein: 'Открытый бассейн',
        kritiyBassein: 'Крытый бассейн',
        wifi: 'Wi-Fi',
        parkovka: 'Парковка',
        reception24h: 'Круглосуточный ресепшен',
        plyazh: 'Пляж',
        baniSayni: 'Бани и сауны',
        animals: 'С животными',
        spa: 'SPA',
        restoraniBari: 'Рестораны и бары',
        sportzal: 'Спортзал'
    };
    return labels[key];
}
