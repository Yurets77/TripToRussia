import { useState } from 'react';
import '/src/blocks/Algorithm/algorithm.css';

export default function Eat({ onMealsChange }) {
    const [selectedMeals, setSelectedMeals] = useState([]);

    const handleMealChange = (meal) => {
        const updatedMeals = selectedMeals.includes(meal)
            ? selectedMeals.filter(m => m !== meal)
            : [...selectedMeals, meal];
        setSelectedMeals(updatedMeals);
        onMealsChange(updatedMeals);
    };

    return (
        <div className="section-algo" data-label="kitchen">
            <div className="kitchen-option ma-top-block">
                <input 
                    type="checkbox" 
                    id="kitchen1" 
                    onChange={() => handleMealChange('Завтрак и ужин')} 
                />
                <img src="./Photo/Algorithm/kitchen1.png" alt="Завтрак и ужин"/>
                <label htmlFor="kitchen1">Завтрак и ужин</label>
            </div>
            <div className="kitchen-option ma-top-block">
                <input 
                    type="checkbox" 
                    id="kitchen2" 
                    onChange={() => handleMealChange('Трёхразовое питание')} 
                />
                <img src="./Photo/Algorithm/kitchen2.png" alt="Трёхразовое питание"/>
                <label htmlFor="kitchen2">Трёхразовое питание</label>
            </div>
            <div className="kitchen-option ma-top-block">
                <input 
                    type="checkbox" 
                    id="kitchen3" 
                    onChange={() => handleMealChange('Система «всё включено»')} 
                />
                <img src="./Photo/Algorithm/kitchen3.png" alt="Система «всё включено»"/>
                <label htmlFor="kitchen3">Система «всё включено»</label>
            </div>
            {/* <button className="save-button">Продолжить</button> */}
        </div>
    );
}
