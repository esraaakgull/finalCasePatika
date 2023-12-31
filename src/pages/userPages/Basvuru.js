import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataContext} from "../../contexts/dataContext";

const Basvuru = () => {
    const {basvuruNo} = useParams()
    const [basvuru, setBasvuru] = useState('')
    const {users} = useDataContext()

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
            <h2><span>Başvuru Durumu:</span> {basvuru.cevap ? 'Cevaplanmış' : 'Başvuru Henüz Cevaplanmamış'}</h2>
            {basvuru.cevap && (<h2><span>Cevap:</span> {basvuru.cevap} < /h2>)}
            <hr/>
            <h2><span>Ad:</span> {basvuru.ad}</h2>
            <h2><span>Soyad:</span> {basvuru.soyad}</h2>
            <h2><span>TC:</span> {basvuru.tc}</h2>
            <h2><span>Yaş:</span> {basvuru.yas}</h2>
            <h2><span>Adres Bilgisi:</span> {basvuru.adresBilgisi}</h2>
            <h2><span>Fotoğraflar - Ekler:</span> {basvuru.fotograflarEkler}</h2>
        </div>
        :
        <div>
            <h1>404 (BULUNAMADI) </h1>
        </div>

}

export default Basvuru