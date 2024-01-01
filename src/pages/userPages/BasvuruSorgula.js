import {useNavigate} from "react-router-dom";
import {useState} from "react";

const BasvuruSorgula = () => {
    const [basvuruSorguNo, setBasvuruSorguNo] = useState('')
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/basvuru/${basvuruSorguNo}`)
    }
    return (
        <div>
            <h1>Basvuru Sorgula</h1>
            <div>Başvuru Sorgu No:
                <input type="text" name="basvuruSorguNo" value={basvuruSorguNo}
                       onChange={(e) => setBasvuruSorguNo(e.target.value)}/></div>
            <div>
                <button className="sorgula" onClick={handleClick}>Sorgula</button>
            </div>
        </div>
    )
}

export default BasvuruSorgula