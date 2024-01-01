import {useFormik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import {useDataContext} from "../../contexts/dataContext";

const validationSchema = Yup.object({
    ad: Yup.string().required("Zorunlu alan"),
    soyad: Yup.string().required('Zorunlu alan'),
    yas: Yup.string().required('Zorunlu alan').matches(/^[1-9]\d{0,2}$/, 'Yaş bir sayı olmalı(1-999)'),
    tc: Yup.string().required('Zorunlu alan').matches(/^[1-9]\d{10}$/, 'Geçersiz TC Kimlik Numarası'),
    basvuruNedeni: Yup.string().required("Zorunlu alan"),
    adresBilgisi: Yup.string().required("Zorunlu alan"),
    fotograflarEkler: Yup.mixed(),
});
const BasvuruOlustur = () => {
    const {users, setUsers} = useDataContext()
    const navigate = useNavigate();
    const {handleSubmit, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            ad: '',
            soyad: '',
            yas: '',
            tc: '',
            basvuruNedeni: '',
            adresBilgisi: '',
            fotograflarEkler: '',
        },
        validationSchema,
        onSubmit: values => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString('en-GB');
            const basvuruTarihi = formattedDate;
            const basvuruNo = uuidv4();
            const user = {...values, basvuruNo: basvuruNo, cevap: '', basvuruTarihi: basvuruTarihi}
            localStorage.setItem('user', JSON.stringify(user))
            setUsers({...users, [basvuruNo]: user});
            navigate("/basvuru-basarili")
        },
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="basvuruForm">
                <div>
                    {errors.ad && touched.ad && <div><span>{errors.ad}</span></div>}
                    <input
                        type="text"
                        name="ad"
                        placeholder="Ad"
                        onChange={handleChange}
                        value={values.ad}
                    />
                </div>
                <div>
                    {errors.soyad && touched.soyad && <div><span>{errors.soyad}</span></div>}
                    <input
                        type="text"
                        name="soyad"
                        placeholder="Soyad"
                        onChange={handleChange}
                        value={values.soyad}
                    />
                </div>
                <div>
                    {errors.yas && touched.yas && <div><span>{errors.yas}</span></div>}
                    <input
                        type="text"
                        name="yas"
                        placeholder="Yaş"
                        onChange={handleChange}
                        value={values.yas}
                    />
                </div>
                <div>
                    {errors.tc && touched.tc && <div><span>{errors.tc}</span></div>}
                    <input
                        type="text"
                        name="tc"
                        placeholder="TC Kimlik No"
                        onChange={handleChange}
                        value={values.tc}
                    />
                </div>
                <div>
                    {errors.basvuruNedeni && touched.basvuruNedeni && <div><span>{errors.basvuruNedeni}</span></div>}
                    <input
                        type="text"
                        name="basvuruNedeni"
                        placeholder="Başvuru Nedeni"
                        onChange={handleChange}
                        value={values.basvuruNedeni}
                    />
                </div>
                <div>
                    {errors.adresBilgisi && touched.adresBilgisi && <div><span>{errors.adresBilgisi}</span></div>}
                    <input
                        type="text"
                        name="adresBilgisi"
                        placeholder="Adres Bilgisi"
                        onChange={handleChange}
                        value={values.adresBilgisi}
                    />
                </div>
                <div>
                    <input type="file" id="avatar" name="fotograflarEkler"
                           accept="image/png, image/jpeg, .doc, .docx, .pdf" value={values.fotograflarEkler}
                           onChange={handleChange} multiple/>
                </div>
                <div>
                    <button type="submit" className="gonder">Gönder</button>
                </div>
            </form>
        </div>
    )
}

export default BasvuruOlustur