import { useState } from 'react';
import '/src/blocks/Algorithm/algorithm.css';
import RangePrice from './RangePrice';

export default function HotelGrid({ selectedCity, selectedDate, selectedDays , selectedRating, selectedClass, selectedMeals, selectedOptions }) {
    const [selectedPrice, setSelectedPrice] = useState(100000);

    const calculateStayDuration = (days) => {
        switch (days) {
            case "day1-2":
                return "2 дня / 1 ночь";
            case "day3-5":
                return "5 дней / 4 ночи";
            case "day7-14":
                return "14 дней / 13 ночей";
            case "day14+":
                return "14+ дней / 14+ ночей";
            default:
                return "2 дня / 1 ночь";
        }
    };

    const hotels = [
        {
            id: 'hotel1',
            name: 'Four Seasons Hotel Moscow 5*',
            location: 'Москва, Россия',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 10000,
            newPrice: 10000,
            image: './Photo/Hotels/hotel1.png',
            rating: "rating5",
            class: "class3",
            meals: ['Завтрак и ужин', 'Система «всё включено»'],
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel2',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Санкт-Петербург, Россия',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 105538,
            newPrice: 51640,
            image: './Photo/Algorithm/plane.png',
            rating: "rating2",
            class: "class1",
            meals: ['Трёхразовое питание'],
            options: { //изменять по факту, по параметрам для отеля
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel3',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Новосибирск, Россия',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel4',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Сочи, Россия',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5", 
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel5',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Турция, Текирова',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel6',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Турция, Текирова',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel7',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Турция, Текирова',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }
        },
        {
            id: 'hotel8',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Турция, Текирова',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",    
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }       
        },
        {
            id: 'hotel9',
            name: 'Club Hotel Phaselis Rose 5*',
            location: 'Турция, Текирова',
            date: '21.08.2024 2 дня / 1 ночь',
            oldPrice: 136538,
            newPrice: 124126,
            image: './Photo/Algorithm/plane.png',
            rating: "rating5",    
            class: "class3",
            options: {
                bassein: true,
                otrkBassein: true,
                kritiyBassein: false,
                wifi: true,
                parkovka: true,
                reception24h: true,
                plyazh: false,
                baniSayni: false,
                animals: false,
                spa: true,
                restoraniBari: true,
                sportzal: true,
            }       
        }
    ];

    const filteredHotels = hotels.filter(hotel => 
        hotel.newPrice >= selectedPrice - 5000 && hotel.newPrice <= selectedPrice + 5000 &&
        hotel.location.includes(selectedCity) &&
        (!selectedRating || hotel.rating === selectedRating) &&
        (!selectedClass || hotel.class === selectedClass)  &&
        (selectedMeals.length === 0 || selectedMeals.some(meal => hotel.meals.includes(meal))) &&
        Object.keys(selectedOptions).every(optionKey => 
            !selectedOptions[optionKey] || hotel.options[optionKey] === selectedOptions[optionKey]
        )
    );

    return (
        <div>
            <RangePrice onPriceChange={setSelectedPrice} />
            <div className="hotels-offers">                
                <div className="hotel-grid">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map(hotel => (
                            <div className="hotel-card" key={hotel.id}>
                                <input type="checkbox" id={hotel.id} className="checkbox"/>
                                <label htmlFor={hotel.id} className="hotel-label">
                                    <div className="hotel-image">
                                        <img src={hotel.image} alt={hotel.name} />
                                    </div>
                                    <div className="hotel-info">
                                        <h3>{hotel.name}</h3>
                                        <p className="dop1h">{hotel.location}</p>                                
                                        <p className="dop2h">{selectedDate ? `${selectedDate} ${calculateStayDuration(selectedDays)}` : hotel.date}</p>
                                        <p className="old-price">{hotel.oldPrice.toLocaleString()} ₽</p>
                                        <p className="new-price dop3h">{hotel.newPrice.toLocaleString()} ₽</p>
                                    </div>
                                </label>
                            </div>
                        ))
                    ) : (
                        <p className="no-hotels">Нет отелей, подходящих под выбранный ценовой диапазон.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
