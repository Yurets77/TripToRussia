import './algorithm.css';
import { useState } from 'react';
import RightChelovek from "./RightBlock/RightChelovek";
import RightGorod from "./RightBlock/RightGorod";
import TransportRight from "./RightBlock/TransportRight";
import TripType from "./RightBlock/TripType";
import Guide from "./RightBlock/Guide";
import Eat from "./RightBlock/Eat";
import RatingHotel from "./RightBlock/RatingHotel";
import OptionTrip from "./RightBlock/OptionTrip";
import LineBetween from "./RightBlock/LineBetween";
import TheBest from "./RightBlock/TheBest";
import HotelGrid from "./RightBlock/HotelGrid";
import LineBetweenTwo from "./RightBlock/LineBetweenTwo";

export default function AlgoRightSide() {
    const [selectedCity, setSelectedCity] = useState("Москва");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDays, setSelectedDays] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});

    return (
        <div className="right-block">
            <RightGorod 
                            onCityChange={setSelectedCity} 
                            onDateChange={setSelectedDate} 
            />
            <RightChelovek onDaysChange={setSelectedDays}/>
            <TransportRight/>
            <TripType/>
            <Guide/>
            <Eat onMealsChange={setSelectedMeals} />
            <RatingHotel 
                onRatingChange={setSelectedRating}
                onClassChange={setSelectedClass}
            />
            <OptionTrip onOptionsChange={setSelectedOptions} />
            <LineBetween/>
            <TheBest/>
            <HotelGrid 
                selectedCity={selectedCity} 
                selectedDate={selectedDate}
                selectedDays={selectedDays} 
                selectedRating={selectedRating}
                selectedClass={selectedClass}
                selectedMeals={selectedMeals}
                selectedOptions={selectedOptions}
            />
            <LineBetweenTwo/>
        </div>
    )
}