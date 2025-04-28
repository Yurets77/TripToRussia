import {useEffect, useState, useContext} from "react";
import {Context} from "../../main.jsx";

export default function ChangeUserData(){
    const {store} = useContext(Context);
    const [ID, setID] = useState("")
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");
    const [changeData, setChangeData] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setID(store.user.id)
                    setName(store.user.name)
                    setSurname(store.user.surname)
                    setGender(store.user.gender)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, []);
    const handleClick = async () => {
        await store.changeData(ID, name, surname, gender)
        setTimeout(() => window.location.reload(), 1000)
        setChangeData(true)

    }
    return(
        <main className='registration-form'>
            <form>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}
                       placeholder='Имя' required/><br/>
                <label htmlFor="surname">Фамилия:</label>
                <input className='InputMaskStyle' type="surname" id="surname" onChange={(e) => setSurname(e.target.value)} value={surname}
                       name="surname" placeholder='Фамилия' required/><br/>
                <label>Пол:</label>
                <select className='gender-select' value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="">Выберите пол</option>
                    <option value='Мужской'>Мужской</option>
                    <option value='Женский'>Женский</option>
                </select><br/><br/>
                {changeData ? <p className='green-success'>Данные успешно изменены</p> : null }
                <button className='' type={"button"} onClick={handleClick}>Изменить данные</button>
            </form>
        </main>
    )
}