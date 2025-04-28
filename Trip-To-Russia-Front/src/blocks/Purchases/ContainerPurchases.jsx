import { useState } from "react"; 
 
export default function ContainerPurchases() { 
    const [ counter, setCounter ] = useState (1); 
    const handleRemoveDiv = () => { 
        setCounter(counter - 1); 
    } 
 
    return ( 
    <div className="container-basket"> 
        <div className="order-block-basket"> 
            { 
                Array.from(Array(counter)).map((item, idx) => 
            <div className="order-basket"> 
                <img src="./Photo/Purchases/hotel1.png" alt="Отель Four Seasons Moscow"/> 
                <div className="order-info-basket"> 
                    <h2>Составляющее поездки:</h2> 
                    <p> - г. Москва</p> 
                    <p> - прибытие 21.09.2024</p> 
                    <p> - поездка на 7 дней</p> 
                    <p> - отель Four Seasons Moscow</p> 
                    <p> - 3 человека</p> 
                    <p> - перелет Airbus'ом</p> 
                    <p> - с детьми</p> 
                    <p> - нужен гид</p> 
                    <p> - цена 10.000 руб.</p> 
                </div> 
                <div className="order-number-basket">заказ №3212</div> 
                <button className="delete-btn-basket" onClick={handleRemoveDiv}>Удалить</button> 
            </div> 
            )} 
            <a href="/Algo" className="add-order-basket"> 
                <img src="./Photo/Purchases/trash.png" alt="Добавить новый заказ"/> 
            </a> 
        </div> 
    </div>  
    ) 
}