import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDataContext} from "../../contexts/dataContext";

const AdminBasvuru = () => {
    const {basvuruNo} = useParams()
    const [basvuru, setBasvuru] = useState('')
    const [cevap, setCevap] = useState('')
    const {users} = useDataContext()
    const navigate = useNavigate()

    const handleCevapla = () => {
        users[basvuruNo].cevap = cevap
        navigate('/admin/basvuru-listesi')
    }

    useEffect(() => {
        const userInfo = Object.keys(users).find(user => user === basvuruNo)

        if (userInfo) {
            setBasvuru(users[userInfo])
        }
    }, [basvuruNo, users])

    return basvuru ?
        <div>
            <h1>Basvuru Detay</h1>
            <h2><span>Başvuru Numarası:</span> {basvuru.basvuruNo}</h2>
            <h2><span>Başvuru Tarihi:</span> {basvuru.basvuruTarihi}</h2>
            <h2><span>Ad:</span> {basvuru.ad}</h2>
            <h2><span>Soyad:</span> {basvuru.soyad}</h2>
            <h2><span>TC:</span> {basvuru.tc}</h2>
            <h2><span>Yaş:</span> {basvuru.yas}</h2>
            <h2><span>Adres Bilgisi:</span> {basvuru.adresBilgisi}</h2>
            <h2><span>Fotoğraflar - Ekler:</span> {basvuru.fotograflarEkler}</h2>
            <hr/>
            <h2><span>Cevapla</span></h2>
            <div>
                <textarea value={cevap} rows={8} cols={100} onChange={(e) => setCevap(e.target.value)}/>
                <div>
                    <button className="sorgula" onClick={handleCevapla}>Cevapla</button>
                </div>
            </div>
        </div>
        :
        <div>
            <h1>404 (BULUNAMADI) </h1>
        </div>

}

export default AdminBasvuru