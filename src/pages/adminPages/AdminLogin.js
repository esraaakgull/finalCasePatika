import {useState} from "react";
import {useAppContext} from "../../contexts/appContext";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {USER, PASSWORD, setIsAdmin} = useAppContext()
    const navigate = useNavigate()
    const handleLogin = async () => {
        if (!(username === USER) || !(password === PASSWORD)) {
            setError('Kullanıcı adı veya şifre hatalı.')
            return false;
        }
        await setIsAdmin(true)
        navigate('basvuru-listesi')
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <div>
                <input placeholder="Kullanıcı Adı" name="name" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Şifre" type="password" name="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <div><span>{error}</span></div>
                <button className="sorgula" onClick={handleLogin}>Giriş</button>
            </div>
        </div>)
}

export default AdminLogin