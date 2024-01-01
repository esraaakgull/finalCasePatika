import {useDataContext} from "../../contexts/dataContext";
import {useNavigate} from "react-router-dom";

const AdminBasvuruListesi = () => {
    const {users} = useDataContext()
    const filteredUserList = Object.keys(users).filter(user => users[user].cevap === '')
    const navigate = useNavigate()
    const handleBasvuruGoruntule = (basvuruNo) => {
        navigate(`/admin/basvuru/${basvuruNo}`)
    }

    return (
        <div>
            <h1>Yanıtlanmamış Başvuru Listesi</h1>
            {
                filteredUserList.map((user, index) =>
                    <div key={index} className="basvuruContainer">
                        <span>Başvuruyu yapan:</span> {users[user].ad} , <span>Tarih:</span> {users[user].basvuruTarihi}
                        <button className="basvuruyuGoster"
                                onClick={() => handleBasvuruGoruntule(users[user].basvuruNo)}>Başvuruyu Görüntüle
                        </button>
                    </div>
                )
            }
        </div>)
}

export default AdminBasvuruListesi